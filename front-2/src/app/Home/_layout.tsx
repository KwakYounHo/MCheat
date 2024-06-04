import Header from "@components/Header/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
