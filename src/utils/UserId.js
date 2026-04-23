export default function getUserId() {
  const stored = localStorage.getItem("nutri_user_id");
  if (stored) return stored;

  const id = Math.random().toString(36).slice(2, 7).toUpperCase(); // ex: "K4RBZ"
  localStorage.setItem("nutri_user_id", id);
  return id;
}
