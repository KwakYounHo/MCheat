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
      <main className={"container"}>{children}</main>
      <Footer />
    </>
  );
}
