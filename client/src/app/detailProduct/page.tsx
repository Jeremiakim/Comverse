import Image from "next/image";
import InfoComponents from "../../components/InfoComponents";
import Navbar from "../../components/NavbarComponents";
import SidebarDetail from "../../components/SidebarDetail";

const DetailProductPage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row justify-end">
        <div className="flex flex-col">
          <div>
            <Image
              width={3000}
              height={40}
              src="https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/C/O/CON560250C-1.jpg"
              alt="..."
            />
          </div>
          <div className="flex flex-row">
            <Image width={3000} height={40} src="/CONv.jpg" alt="..." />
            <Image width={3000} height={40} src="/CONv.jpg" alt="..." />
          </div>
        </div>
        <div>
          <div className="sticky mt-[4rem] top-10">
            <SidebarDetail />
          </div>
        </div>
      </div>
      <div className="mt-[1rem]">
        <InfoComponents />
      </div>
    </>
  );
};

export default DetailProductPage;
