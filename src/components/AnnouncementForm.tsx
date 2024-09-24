import IconArrowBack from "@material-design-icons/svg/outlined/arrow_back.svg";
import AnnouncementSteps from "./AnnouncementSteps";

export default function AnnouncementForm() {
  return (
    <section className="flex flex-col gap-8 w-[calc(100%-4rem)] max-w-screen-md mx-auto ]">
      <button className="flex items-center justify-center bg-light-primary rounded-md w-11 h-11">
        <IconArrowBack
          className="fill-white max-w-5 max-h-5"
          width={20}
          height={20}
        />
      </button>

      <div className="flex gap-8 items-center">
        <button
          type="button"
          aria-label="Voltar"
          className="py-4 bg-white rounded-lg font-inter font-bold text-[1.125rem]/[1.5rem] border-[0.0625rem] border-light-primary text-light-primary -tracking-[0.0112rem] w-full max-w-36"
        >
          Voltar
        </button>

        <button
          type="button"
          aria-label="Avançar"
          className="py-4 bg-light-primary rounded-lg font-inter font-bold text-[1.125rem]/[1.5rem] text-white -tracking-[0.0112rem] w-full max-w-36"
        >
          Avançar
        </button>
      </div>

      <AnnouncementSteps />
    </section>
  );
}
