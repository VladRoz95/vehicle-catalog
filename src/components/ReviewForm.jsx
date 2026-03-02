import { useState } from "react";

import "../styles/Review.css";

export default function ReviewForm({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text.trim());
    setText("");
  };

  return (
    <form className="review_form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a review"
        required
      />
      <button type="submit">Add review</button>
    </form>
  );
}
