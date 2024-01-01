import Navbar from "@/components/NavbarComponents";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <body>{children}</body>
    </>
  );
}
