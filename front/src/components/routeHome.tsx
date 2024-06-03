import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RouteHome() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/search", { replace: true });
  }, [navigate]);
  return <></>;
}
