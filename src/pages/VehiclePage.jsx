import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchVehicleById } from "../services/api";
import { getReviews, saveReview, deleteMyReview } from "../utils/localStorage";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import "../styles/VehiclePage.css";
import "../styles/Review.css";

export default function VehiclePage() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (!id) return;

    fetchVehicleById(Number(id)).then((data) => {
      setVehicle(data);
      setMainImage(data.images[0] || "");

      const localReviews = getReviews(Number(id));
      const apiReviews = data.reviews || [];
      setReviews([...apiReviews, ...localReviews]);
    });
  }, [id]);

  const addReview = (text) => {
    if (!id) return;

    const newReview = {
      rating: 5,
      comment: text,
      reviewerName: "You",
      date: new Date().toISOString(),
    };

    saveReview(Number(id), newReview);
    setReviews((prev) => [...prev, newReview]);
  };

  const handleDelete = (index) => {
    deleteMyReview(Number(id), index);
    setReviews((prev) => prev.filter((_, i) => i !== index));
  };

  if (!vehicle) return <p>Loading....</p>;

  const discount = vehicle.price * (1 - vehicle.discountPercentage / 100);
  const discountRounded = Math.round(discount * 100) / 100;

  return (
    <main className="vehicle_page">
      <div className="page_return">
        <Link to="/">Return</Link>
      </div>

      <div className="page_content">
        <div className="content_image">
          <img src={mainImage} alt={vehicle.title} className="main_image" />

          <div className="vehicle_images">
            {vehicle.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${vehicle.title} ${index + 1}`}
                onClick={() => setMainImage(img)}
                className={img === mainImage ? "active_thumb" : ""}
              />
            ))}
          </div>
        </div>

        <div className="content_info">
          <h1>{vehicle.title}</h1>
          <p className="info_price">
            Price: <span>${vehicle.price}</span>{" "}
            <strong>${discountRounded}</strong>
          </p>
          <p>{vehicle.description}</p>
        </div>
      </div>

      <div className="vehicle_page_review">
        <h2>Reviews</h2>
        <div>
          <ReviewForm onSubmit={addReview} />
          <ReviewList reviews={reviews} onDelete={handleDelete} />
        </div>
      </div>
    </main>
  );
}
