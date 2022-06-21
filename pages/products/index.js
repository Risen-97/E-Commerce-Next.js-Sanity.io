import { useState } from "react";
import Product from "../../components/products/Product";
import { client } from "../../lib/sanity";
import Banner from "../../components/products/Banner";
import Head from "next/head";
const Prdocuts = ({ products, banner, category }) => {
  const [items, setItems] = useState(products);

  const filterProducts = (category) => {
    const updateItems = products.filter((item) => item.category === category);
    category === "all" ? setItems(products) : setItems(updateItems);
  };

  return (
    <>
      <Head>
        <title>MoStore - Products</title>
      </Head>
      <div className="min-h-[200vh] pb-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-5 2xl:px-0">
          {banner && <Banner banner={banner[0]} />}
          <h1 className="title">Our Products</h1>

          <div className="flex items-center justify-between w-full gap-5 md:gap-0">
            <div className="flex items-center border-2 border-blue-600 rounded-md overflow-hidden">
              <input
                type="text"
                className="outline-none w-full px-2 py-1"
                placeholder="Search..."
              />
              <button className="bg-indigo-500 py-1 px-4 text-white ">
                Search
              </button>
            </div>
            <select
              className="outline-none border-2 border-blue-500 w-28 md:w-40 capitalize"
              onChange={(e) => filterProducts(e.target.value)}
            >
              {category.map((item) => (
                <option key={item} value={item} className="py-4">
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 py-5">
            {items.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Prdocuts;

export async function getStaticProps() {
  const productQuery = `*[_type == "product"]`;
  const bannerQuery = `*[_type == "banner"]`;

  const products = await client.fetch(productQuery);
  const banner = await client.fetch(bannerQuery);

  const category = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  return {
    props: { products, banner, category },
    revalidate: 60,
  };
}
