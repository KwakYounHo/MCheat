import { useNavigate } from "react-router-dom";

export default function NOTFOUND() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>없는 페이지</h1>
      <p>없는 페이지 입니다</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        돌아가기
      </button>
    </div>
  );
}
