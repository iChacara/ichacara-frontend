import "swiper/css";
import "swiper/css/navigation";
import FarmImageCarousel from "../../components/farm/FarmImageCarousel";
import TagComponent from '../../components/ui/Tag';

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
      <div className="flex flex-col gap-2 mt-4">
        <h1 className="text-2xl font-bold text-gray-800">Chácara bom pingo</h1>
        <h2 className="text-lg text-gray-600">Marília</h2>
      </div>
      <div className="mt-4 border-b-2 border-b-gray-200 pb-4 flex gap-2">
        <TagComponent
          services={["4 Quartos", "2 piscinas", "Jacuzzi", "Mesa de sinuca"]}
        />
      </div>
      <p className="mt-4 text-gray-700">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.{" "}
      </p>
      <div className="bg-teal-50 p-8 rounded-2xl flex justify-between items-center mt-8">
        <strong className="text-2xl text-teal-900 ">R$600/dia</strong>
        <button className="bg-teal-900 text-teal-50 text-xl rounded-xl p-4">Agendar</button>
      </div>
    </main>
  );
}
