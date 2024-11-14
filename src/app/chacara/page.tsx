import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import FarmImageCarousel from "../../components/farm/FarmImageCarousel";

export default function ChacaraPage() {
  return (
    <main className="min-h-dvh h-full p-8">
      <FarmImageCarousel
        images={[
          "https://placehold.co/500x500.png",
          "https://placehold.co/600x500.png",
          "https://placehold.co/700x500.png",
          "https://placehold.co/800x500.png",
        ]}
      />
    </main>
  );
}
