const REVIEW_KEY = "vehicles_reviews";

export function saveReview(vehicleId, review) {
  const allReviews = JSON.parse(localStorage.getItem(REVIEW_KEY) || "{}");
  if (!allReviews[vehicleId]) allReviews[vehicleId] = [];
  allReviews[vehicleId].push(review);
  localStorage.setItem(REVIEW_KEY, JSON.stringify(allReviews));
}

export function getReviews(vehicleId) {
  const allReviews = JSON.parse(localStorage.getItem(REVIEW_KEY) || "{}");
  return allReviews[vehicleId] || [];
}

export function deleteMyReview(vehicleId, index) {
  const allReviews = JSON.parse(localStorage.getItem(REVIEW_KEY) || "{}");
  if (!allReviews[vehicleId]) return;

  allReviews[vehicleId].splice(index, 1);
  localStorage.setItem(REVIEW_KEY, JSON.stringify(allReviews));
}