"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImage = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="">
      <Image
        src={images[current]}
        alt="product-image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex-center gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            className={cn(
              "border border-black hover:border-yellow-500 cursor-pointer",
              current === index && "border-yellow-600"
            )}
            onClick={() => setCurrent(index)}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
