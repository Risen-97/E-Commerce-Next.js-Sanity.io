import React from "react";
import ProductDetails from "../../components/products/ProductDetails";
import { client } from "../../lib/sanity";
import Head from "next/head";
const Product = ({ product }) => {
  return (
    <>
      <Head>
        <title>MoStore - {product.name}</title>
      </Head>
      <div className="">
        <ProductDetails product={product} />
      </div>
    </>
  );
};

export default Product;

export async function getStaticPaths() {
  const productQuery = `*[_type == "product"]`;
  const products = await client.fetch(productQuery);

  const paths = products.map((product) => {
    return {
      params: { slug: product.slug.current },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;

  const product = await client.fetch(productQuery);

  if (!product) {
    return {
      redirect: {
        destination: "/products",
        permanent: false,
      },
    };
  }
  return {
    props: { product },
  };
}
