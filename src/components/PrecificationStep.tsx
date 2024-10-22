"use client";

import IconEdit from "@material-design-icons/svg/filled/edit.svg";

export default function PrecificationStep() {
  // const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;

  //   const formatedValue = formatToCurrency(
  //     parseFloat(value.replace(/[^\d,]/g, "").replace(",", ".")) || 0
  //   );

  //   setFormData((prev) => ({ ...prev, [name]: formatedValue }));
  // };

  const formatToCurrency = (priceValue: any) => {
    return priceValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor="dailyPrice"
        className="flex flex-col gap-2 font-poppins justify-center items-center font-normal text-2xl text-[#49607B]"
      >
        <div className="relative flex items-center gap-2">
          <input
            className="min-w-[8.3125rem] max-w-52 outline-none block border-none h-fit text-[2rem] font-bold text-center text-light-primary placeholder-light-primary"
            type="text"
            name="dailyPrice"
            id="dailyPrice"
            placeholder="R$ 0,00"
            aria-label="Campo de preço da chácara"
            // value={formData.dailyPrice}
            // onChange={handlePriceChange}
          />

          <IconEdit
            className="max-w-6 max-h-6 fill-light-primary cursor-pointer"
            width={24}
            height={24}
          />
        </div>
        / dia
      </label>
    </div>
  );
}
