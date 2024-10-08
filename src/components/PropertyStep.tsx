"use client";

import useStepsContext from "@/hooks/useStepsContext";

export default function PropertyStep() {
  const { formData, setFormData } = useStepsContext();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor="propertyName"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Nome da chácara
        <input
          className="flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="text"
          name="propertyName"
          id="propertyName"
          placeholder="Nome da chácara"
          aria-label="Campo de nome da chácara"
          value={formData.propertyName}
          onChange={handleChange}
        />
      </label>

      <label
        htmlFor="announcementTitle"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Título do anúncio
        <input
          className="flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="text"
          name="announcementTitle"
          id="announcementTitle"
          placeholder="Título do anúncio"
          aria-label="Campo de título do anúncio"
          value={formData.announcementTitle}
          onChange={handleChange}
        />
      </label>

      <label
        htmlFor="propertyDescription"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Descrição
        <textarea
          className="resize-none flex-grow border-[0.0625rem] border-[#6F7978] h-48 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          name="propertyDescription"
          id="propertyDescription"
          placeholder="Descrição do anúncio"
          aria-label="Campo de descrição"
          value={formData.propertyDescription}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
