import { useState } from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "./sanity";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ImageNext = ({ mySanityData, classes }) => {
  const [loading, setLoading] = useState(true);
  const imageProps = useNextSanityImage(client, mySanityData);

  return (
    <Image
      src={imageProps?.src}
      layout="fill"
      objectFit="cover"
      className={cn(
        "w-full h-full duration-700 ease-in-out",
        loading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};

export default ImageNext;
