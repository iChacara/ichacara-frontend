"use client";

import Image from "next/image";
import React, { useState } from "react";
import IconClose from "@material-design-icons/svg/outlined/close.svg";

export default function ImagesStep() {
  const [images, setImages] = useState<File[]>([]);

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files);
    }
  };

  return (
    <>
      <input
        onChange={handleFileSelected}
        accept="image/png, image/jpeg"
        type="file"
        multiple
        className=""
      />

      <div className="flex flex-col gap-4">
        {images.map((image) => {
          const src = URL.createObjectURL(image);
          return (
            <div className="flex items-center p-2 bg-[#F4FBF9] border border-[#9CF1F1] rounded-lg justify-between">
              <div className="flex items-center gap-4">
                <figure className="w-10 h-10 rounded max-w-10 max-h-10 relative overflow-hidden">
                  <Image
                    src={src}
                    alt={image.name}
                    className="object-cover"
                    fill
                  />
                </figure>

                <p className="font-poppins font-normal text-sm text-light-on-primary-container">
                  {image.name}
                </p>
              </div>

              <IconClose
                className="max-w-4 max-h-4 fill-black cursor-pointer"
                width={16}
                height={16}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
