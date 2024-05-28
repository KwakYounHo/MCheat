import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div>
      <p>없는 페이지</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <p>이전 페이지로 돌아가기</p>
      </button>
    </div>
  );
}
