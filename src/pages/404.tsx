import { navigate } from "gatsby";
import { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    // Redirect to the home page on load
    navigate("/");
  }, []);

  return null;
};

export default NotFoundPage;
