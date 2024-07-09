import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Deconnexion() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem('key');
    if (localStorage.getItem('key') === null) {
      navigate("/");
    }
  }, [navigate]);

  return null;
}
