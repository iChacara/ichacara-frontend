"use client";

export default function PropertyStep() {
  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor="name"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Nome da chácara
        <input
          className="flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="text"
          name="name"
          id="name"
          placeholder="Nome da chácara"
          aria-label="Campo de nome da chácara"
          // value={formData.name}
          // onChange={handleChange}
        />
      </label>

      <label
        htmlFor="title"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Título do anúncio
        <input
          className="flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="text"
          name="title"
          id="title"
          placeholder="Título do anúncio"
          aria-label="Campo de título do anúncio"
          // value={formData.title}
          // onChange={handleChange}
        />
      </label>

      <label
        htmlFor="description"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Descrição
        <textarea
          className="resize-none flex-grow border-[0.0625rem] border-[#6F7978] h-48 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          name="description"
          id="description"
          placeholder="Descrição do anúncio"
          aria-label="Campo de descrição"
          // value={formData.description}
          // onChange={handleChange}
        />
      </label>
    </div>
  );
}
