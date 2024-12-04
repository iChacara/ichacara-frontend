import "swiper/css";
import "swiper/css/navigation";
import FarmImageCarousel from "../../../components/farm/FarmImageCarousel";
import TagComponent from "../../../components/ui/Tag";
import { Metadata } from "next";
import { farmById } from "@/services/farm";
import Link from "next/link";
// import { useState } from "react";

export const metadata: Metadata = {
  title: "iChacara - Chácara",
  description: "Aluguel de chácaras",
};

export default async function FarmPage({ params }: { params: { id: string } }) {
  // const [seeMore, setSeeMore] = useState(false);

  const { data } = await farmById(params.id);

  const services = data.services.split(",");

  const images = JSON.parse(data.photos).map((photo: string) => {
    return process.env.IMAGE_URL + photo;
  });

  return (
    <main className="min-h-dvh h-full overflow-hidden">
      {images.length > 0 && (
        <FarmImageCarousel
          images={images}
          // images={[
          //   "https://images.unsplash.com/photo-1440558953273-969c107f78a4?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          //   "https://images.unsplash.com/photo-1562866470-3774249bef10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          //   "https://images.unsplash.com/photo-1574714912032-6b7d6d4e9e79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          //   "https://images.unsplash.com/photo-1689805000702-5d702a1d211b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          //   "https://plus.unsplash.com/premium_photo-1680302170723-1318f0a8859b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          //   "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          // ]}
        />
      )}

      <div className="max-w-screen-2xl mx-auto w-[calc(100%-4rem)]">
        <div className="flex flex-col gap-2 mt-4">
          <h1 className="font-poppins text-[1rem]/[1.25rem] font-medium text-light-primary min-h-10 line-clamp-2 tracking-[0.0156rem]">
            {data.title}
          </h1>

          <h2 className="font-poppins text-[1rem]/[0.0156rem] text-[#6F7978] min-h-5 line-clamp-1 leading-normal">
            {data.city}
          </h2>
        </div>

        <div className="mt-4 border-b-2 border-b-gray-200 pb-4 flex gap-2">
          <TagComponent services={services} />
        </div>

        <p className="relative font-poppins font-light mt-4 text-light-on-primary-container line-clamp-[10] leading-[1.375rem] whitespace-pre-wrap">
          {data.description}

          <button
            className="w-full p-2 text-light-primary bottom-0 absolute bg-gradient-to-t from-white via-white/75 to-white/0 flex justify-center items-center font-bold"
            // onClick={() => setSeeMore(true)}
          >
            Ver mais
          </button>
        </p>
      </div>

      <div className="bg-[#F4FBF9] py-2 px-3 flex w-fit gap-2 items-center fixed bottom-4 left-0 right-0 m-auto">
        <strong className="font-inter font-normal text-lg text-light-on-primary-container">
          R${data.dailyPrice}/dia
        </strong>

        <Link href={`${params.id}/agendar`} className="flex items-center font-inter text-base bg-light-on-primary-container rounded-lg py-2 px-3 font-medium text-white">
          Agendar
        </Link>
      </div>
    </main>
  );
}
