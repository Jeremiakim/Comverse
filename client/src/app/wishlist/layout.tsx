import ProtectComponents from "@/components/ProtectComponents";

const WishlistLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProtectComponents>
      <main>{children}</main>
    </ProtectComponents>
  );
};

export default WishlistLayout;
