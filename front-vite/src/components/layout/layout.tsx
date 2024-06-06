import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer";

import "./layout.css";

export default function Layout({
  children = <></>,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main
        className={
          "w-full min-h-[calc(100vh-60px)] flex flex-col items-center justify-center"
        }
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
