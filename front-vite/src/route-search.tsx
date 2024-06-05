import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function RouteToSearch() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/search", { replace: true });
  }, []);

  return <></>;
}
