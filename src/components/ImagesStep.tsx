"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import IconClose from "@material-design-icons/svg/outlined/close.svg";
import IconImage from "@material-design-icons/svg/outlined/image.svg";
import { AnnouncementImagesStepProps } from "@/lib/interfaces";
import { showToast } from "@/lib/utils";

export default function ImagesStep({
  register,
  errors,
  setValue,
  getValues,
  watch,
}: AnnouncementImagesStepProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const images = watch("images.images");

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      showToast(
        "error",
        <>
          <p className="mb-2">Por favor, corrija os seguintes erros:</p>
          {Object.entries(errors).map(([key, value]) => (
            <p key={key} className="mb-1">
              - {value.message}
            </p>
          ))}
        </>
      );
    }
  }, [errors]);

  const handleFileSelected = (files: FileList | null) => {
    const currentImages = getValues("images.images") ?? [];
    if (files) {
      const filesArray = Array.from(files);
      const newFiles = filesArray.filter((file) => {
        return !currentImages.some(
          (existingImage) => existingImage.name === file.name
        );
      });

      if (newFiles.length > 0) {
        setValue("images.images", [...currentImages, ...newFiles]);
      }
    }
  };

  const removeImage = (imageToRemove: File) => {
    const currentImages = getValues("images.images") ?? [];
    const updatedImages = currentImages.filter(
      ({ name }) => name !== imageToRemove.name
    );
    setValue("images.images", updatedImages);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    handleFileSelected(files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  return (
    <>
      <label
        htmlFor="images"
        className={`flex flex-col items-center gap-3 w-full py-8 border border-dashed border-dark-primary rounded-2xl cursor-pointer transition-all ease-in-out duration-300 ${
          isDragOver ? "bg-blue-100" : "bg-gray-50"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <IconImage
          className="max-w-10 max-h-10 fill-light-primary"
          width={40}
          height={40}
        />
        <h2 className="text-gray-400 text-xs">Até 10 imagens (PNG, JPEG)</h2>
        <h4 className="text-light-on-primary-container text-sm font-medium leading-snug">
          Arraste e solte suas imagens aqui ou
        </h4>
        <input
          {...(register("images.images"),
          {
            onChange: (e) => handleFileSelected(e.target.files),
          })}
          accept="image/png, image/jpeg"
          type="file"
          id="images"
          multiple
          hidden
        />
        <p className="block py-2 px-4 bg-light-primary rounded-lg font-inter font-bold text-base text-white w-fit">
          Escolha suas imagens
        </p>
      </label>

      <div className="flex flex-col gap-4">
        {images?.length > 0 ? (
          images.map((image) => {
            const src = URL.createObjectURL(image);
            return (
              <div
                key={image.name}
                className="flex items-center p-2 bg-[#F4FBF9] border border-[#9CF1F1] rounded-lg justify-between"
              >
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
                  onClick={() => removeImage(image)}
                  className="max-w-4 max-h-4 fill-black cursor-pointer"
                  width={16}
                  height={16}
                />
              </div>
            );
          })
        ) : (
          <p className="text-center text-xl text-gray-500 font-poppins font-medium">
            Nenhuma imagem adicionada
          </p>
        )}
      </div>
    </>
  );
}
