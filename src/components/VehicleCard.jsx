import { Link } from "react-router-dom";
import "../styles/VehicleCard.css";

export default function VehicleCard({
  id,
  title,
  price,
  thumbnail,
  brand,
  discountPercentage,
}) {
  const discount = price * (1 - discountPercentage / 100);
  const discountRounded = Math.round(discount * 100) / 100;

  return (
    <div className="vehicle_card">
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>{brand}</p>
      <div className="prices">
        <p className="old_price">${price}</p>
        <p className="new_price">${discountRounded}</p>
      </div>

      <Link to={`/vehicles/${id}`}>
        <button>More details</button>
      </Link>
    </div>
  );
}
