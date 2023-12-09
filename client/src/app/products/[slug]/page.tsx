import InfoComponents from "@/components/InfoComponents";
import Navbar from "@/components/NavbarComponents";
import SidebarDetail from "@/components/SidebarDetail";
import Image from "next/image";
import { ProductModel } from "@/db/models/product";
import { MyResponse } from "@/app/apis/products/[slug]/route";

const fecthProductBySlug = async (slug: string) => {
  const response = await fetch(`http://localhost:3000/apis/products/${slug}`);

  const data: MyResponse<ProductModel> = await response.json();
  const datas = data.data;

  if (datas === undefined) {
    throw new Error("Data Is undefined");
  }

  return datas;
};

const DetailProductPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const product = await fecthProductBySlug(slug);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row justify-end">
        {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
        <div className="flex flex-col">
          <div>
            <Image width={3000} height={40} src={product.thumbnail} alt="..." />
          </div>
          <div className="flex flex-row">
            {product?.images.map((image) => {
              return (
                <div key={product?._id?.toString()}>
                  <Image width={3000} height={40} src={image} alt="..." />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="sticky mt-[4rem] top-10">
            <SidebarDetail product={product} />
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
