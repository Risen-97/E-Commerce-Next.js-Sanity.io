import { useRouter } from "next/router";
import ImageNext from "../../lib/ImageNext";
const Product = ({ product }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/products/${product.slug.current}`)}
      className="bg-white shadow-xl hover:-translate-y-4 transition duration-700 overflow-hidden cursor-pointer h-[423px] w-[300px] relative rounded-xl"
    >
      <div className="relative w-full h-full overflow-hidden bg-gray-200">
        <ImageNext mySanityData={product.image[0]} />
      </div>
      <div className="bg-white py-2  px-6 absolute bottom-0 w-full ">
        <h4 className="text-[16px] flex items-center font-medium  truncate mb-2 capitalize">
          {product.name}
        </h4>
        <span>${product.price}</span>
      </div>
    </div>
  );
};

export default Product;
