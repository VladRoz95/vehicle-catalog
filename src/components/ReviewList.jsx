import "../styles/Review.css";

export default function ReviewList({ reviews, onDelete }) {
  return (
    <ul className="review_list">
      {reviews.map((review, index) => (
        <li key={index} className="review_item">
          <strong>{review.reviewerName}</strong>
          <p>Rating: {review.rating}</p>
          <p>{review.comment}</p>
          <small>{new Date(review.date).toLocaleDateString()}</small>

          {review.reviewerName === "You" && (
            <button onClick={() => onDelete(index)}>Delete</button>
          )}
        </li>
      ))}
    </ul>
  );
}
