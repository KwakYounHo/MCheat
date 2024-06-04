import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main>
      <div
        className={
          "w-full h-screen absolute top-0 left-0 bg-background flex flex-col justify-center items-center gap-10"
        }
      >
        <p className={"text-6xl"}>Oppps...</p>
        <p className={"capitalize text-lg"}>can not found page</p>
        <Button
          variant="outline"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back to previous page
        </Button>
      </div>
    </main>
  );
}
