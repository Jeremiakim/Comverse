import Navbar from "@/components/NavbarComponents";
import ProtectComponents from "@/components/ProtectComponents";

const WishlistLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProtectComponents>
      <Navbar />
      <main>{children}</main>
    </ProtectComponents>
  );
};

export default WishlistLayout;
