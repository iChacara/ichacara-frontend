import IconHelp from "@material-design-icons/svg/outlined/help_outline.svg";

export default function AddressStep() {
  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor="cep"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        <p className="flex gap-2 items-center">
          CEP
          <IconHelp
            className="fill-[#2D3648] max-w-4 max-h-4 cursor-pointer"
            width={16}
            height={16}
          />
        </p>
        <input
          className="flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="text"
          name="cep"
          id="cep"
          placeholder="Somente números"
          aria-label="Campo de CEP"
        />
      </label>

      <label
        htmlFor="street"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Rua
        <input
          className="flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="text"
          name="street"
          id="street"
          placeholder="Ex.: Avenida Angélica"
          aria-label="Campo de rua"
        />
      </label>

      <div className="flex gap-6">
        <label
          htmlFor="number"
          className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem] flex-[0_1_30%] min-w-0"
        >
          Número
          <input
            className="border border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
            type="text"
            name="number"
            id="number"
            aria-label="Campo de número"
          />
        </label>

        <label
          htmlFor="complement"
          className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem] flex-[0_1_70%] min-w-0"
        >
          <p className="flex gap-1">
            Complemento
            <span className="text-[0.6875rem]/[1.5rem] text-[#6F7978] font-normal">
              (opcional)
            </span>
          </p>
          <input
            className="border border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
            type="text"
            name="complement"
            id="complement"
            placeholder="Ex.: Fundos, bloco 4"
            aria-label="Campo de complemento"
          />
        </label>
      </div>

      <label
        htmlFor="neighborhood"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Bairro
        <input
          className="flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="text"
          name="neighborhood"
          id="neighborhood"
          placeholder="Ex.: Higienópolis"
          aria-label="Campo de bairro"
        />
      </label>

      <div className="flex gap-6">
        <label
          htmlFor="city"
          className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem] flex-[0_1_70%] min-w-0"
        >
          Cidade
          <input
            className="border border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
            type="text"
            name="city"
            id="city"
            placeholder="Ex.: São Paulo"
            aria-label="Campo de cidade"
          />
        </label>

        <label
          htmlFor="state"
          className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem] flex-[0_1_30%] min-w-0"
        >
          Estado
          <input
            className="border border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
            type="text"
            name="state"
            id="state"
            aria-label="Campo de estado"
          />
        </label>
      </div>
    </div>
  );
}
