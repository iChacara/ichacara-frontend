import "swiper/css";
import "swiper/css/navigation";
import FarmImageCarousel from "../../components/farm/FarmImageCarousel";
import TagComponent from "../../components/ui/Tag";

export default function ChacaraPage() {
  return (
    <main className="min-h-dvh h-full overflow-hidden">
      <FarmImageCarousel
        images={[
          "https://images.unsplash.com/photo-1440558953273-969c107f78a4?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1562866470-3774249bef10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1574714912032-6b7d6d4e9e79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1689805000702-5d702a1d211b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1680302170723-1318f0a8859b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]}
      />

      <div className="max-w-screen-2xl mx-auto w-[calc(100%-4rem)]">
        <div className="flex flex-col gap-2 mt-4">
          <h1 className="font-poppins text-[1rem]/[1.25rem] font-medium text-light-primary min-h-10 line-clamp-2 tracking-[0.0156rem]">
            Chácara Monte dos Guarapanã Chácara Monte dos Guarapanã Chácara
            Monte dos Guarapanã
          </h1>

          <h2 className="font-poppins text-[1rem]/[0.0156rem] text-[#6F7978] min-h-5 line-clamp-1 leading-normal">
            Marília
          </h2>
        </div>

        <div className="mt-4 border-b-2 border-b-gray-200 pb-4 flex gap-2">
          <TagComponent
            services={[
              "4 Quartos",
              "Mesa de sinuca",
              "Piscina",
              "Churrasqueira",
            ]}
          />
        </div>

        <p className="font-poppins font-light mt-4 text-light-on-primary-container line-clamp-[10] leading-[1.375rem]">
          A Chácara Monte dos Guarapanã é um espaço de lazer e eventos situado
          em um ambiente natural e acolhedor. Com uma ampla área verde, a
          chácara oferece diversas opções para quem busca tranquilidade, contato
          com a natureza ou um local especial para realizar eventos como
          casamentos, festas de aniversário, confraternizações e encontros
          familiares. A Chácara Monte dos Guarapanã é um espaço de lazer e
          eventos situado em um ambiente natural e acolhedor. Com uma ampla área
          verde, a chácara oferece diversas opções para quem busca
          tranquilidade, contato com a natureza ou um local especial para
          realizar eventos como casamentos, festas de aniversário,
          confraternizações e encontros familiares. A Chácara Monte dos
          Guarapanã é um espaço de lazer e eventos situado em um ambiente
          natural e acolhedor. Com uma ampla área verde, a chácara oferece
          diversas opções para quem busca tranquilidade, contato com a natureza
          ou um local especial para realizar eventos como casamentos, festas de
          aniversário, confraternizações e encontros familiares.
        </p>
      </div>

      <div className="bg-[#F4FBF9] py-2 px-3 flex w-fit gap-2 items-center fixed bottom-4 left-0 right-0 m-auto">
        <strong className="font-inter font-normal text-lg text-light-on-primary-container">
          R$600/dia
        </strong>

        <button className="flex items-center font-inter text-base bg-light-on-primary-container rounded-lg py-2 px-3 font-medium text-white">
          Agendar
        </button>
      </div>
    </main>
  );
}
