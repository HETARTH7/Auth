import toast from "react-hot-toast";

const usernameVerify = (error = {}, values) => {
  if (!values.username) {
    error.username = toast.error("Username required");
  }
};
