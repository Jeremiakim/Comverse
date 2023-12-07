import InfoComponents from "@/components/InfoComponents";
import Navbar from "@/components/NavbarComponents";
import SidebarDetail from "@/components/SidebarDetail";
import Image from "next/image";
import { ProductModel } from "@/db/models/product";

const fecthProductBySlug = async (slug: string) => {
  "use server";
  const response = await fetch(`http://localhost:3000/apis/products/${slug}`);

  const data: ProductModel = await response.json();
  return data;
};

const DetailProductPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const product = await fecthProductBySlug(slug);
  const products = product.data;

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row justify-end">
        {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
        <div className="flex flex-col">
          <div>
            <Image
              width={3000}
              height={40}
              src={products.thumbnail}
              alt="..."
            />
          </div>
          <div className="flex flex-row">
            {products.images.map((image) => {
              return (
                <div key={products._id}>
                  <Image width={3000} height={40} src={image} alt="..." />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="sticky mt-[4rem] top-10">
            <SidebarDetail products={products} />
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
