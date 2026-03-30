import { v4 as uuidv4 } from "uuid";

const getUserId = () => {
  let id = localStorage.getItem("smartcard_user_id");

  if (!id) {
    id = uuidv4();
    localStorage.setItem("smartcard_user_id", id);
  }

  return id;
};

export default getUserId;
