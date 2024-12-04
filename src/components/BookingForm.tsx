"use client";

import { RangeCalendar } from "@nextui-org/calendar";
import { today, getLocalTimeZone, parseDate } from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";
import { useForm, Controller } from "react-hook-form";
import { BookingFormProps } from "@/lib/interfaces";
import { useRouter } from "next/navigation";
import { BookingFormValues } from "@/lib/types";
import { bookingSchema } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { showToast } from "@/lib/utils";
import IconArrowBack from "@material-design-icons/svg/outlined/arrow_back.svg";

export default function BookingForm({ userId, farmId }: BookingFormProps) {
  const router = useRouter();
  const todayDate = today(getLocalTimeZone());

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    mode: "onTouched",
    defaultValues: {
      farmId: farmId,
      lesseeId: userId,
      numGuests: 1,
      startDate: todayDate.add({ days: 1 }).toString(),
      endDate: todayDate.add({ days: 2 }).toString(),
    },
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      showToast(
        "error",
        <div>
          <p className="mb-2">Por favor, corrija os seguintes erros:</p>
          {Object.entries(errors).map(([key, value]) => (
            <p key={key} className="mb-1">
              - {value.message}
            </p>
          ))}
        </div>
      );
    }
  }, [errors]);

  const onSubmit = async (data: BookingFormValues) => {
    try {
      console.log(data);

      const bookingResponse = await fetch("/api/booking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const { errors, message } = await bookingResponse.json();

      if (!bookingResponse.ok) {
        if (errors && Array.isArray(errors)) {
          showToast(
            "error",
            <>
              <p className="mb-2">Por favor, corrija os seguintes erros:</p>
              {errors.map((error: string, index: number) => (
                <p key={index} className="mb-1">
                  - {error}
                </p>
              ))}
            </>
          );
        } else if (message) {
          showToast("error", <p>{message}</p>);
        } else {
          showToast("error", <p>Ocorreu um erro desconhecido!</p>);
        }
        return;
      }

      showToast("success", <p>{message}</p>);
      router.push("/chacaras");
    } catch (error: any) {
      showToast(
        "error",
        <p>{error.message || "Ocorreu um erro ao tentar reservar!"}</p>
      );
    }
  };

  return (
    <I18nProvider locale="pt-BR">
      <section className="flex flex-col pt-8 gap-8 w-[calc(100%-4rem)] max-w-screen-md mx-auto relative">
        <button
          className="flex items-center justify-center bg-light-primary rounded-md w-11 h-11"
          onClick={() => router.back()}
        >
          <IconArrowBack
            className="fill-white max-w-5 max-h-5"
            width={20}
            height={20}
          />
        </button>

        <p className="text-center font-poppins font-normal text-light-on-primary-container text-[1.5rem]/[2rem]">
          Dias disponíveis
        </p>

        <form
          className="flex flex-col items-center gap-4 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="startDate"
            control={control}
            defaultValue={todayDate.add({ days: 1 }).toString()}
            render={({ field: startField }) => (
              <Controller
                name="endDate"
                control={control}
                defaultValue={todayDate.add({ days: 2 }).toString()}
                render={({ field: endField }) => (
                  <RangeCalendar
                    aria-label="Data de agendamento"
                    value={{
                      start: startField.value
                        ? parseDate(startField.value)
                        : todayDate,
                      end: endField.value
                        ? parseDate(endField.value)
                        : todayDate.add({ days: 1 }),
                    }}
                    onChange={(range) => {
                      const startDate = range.start;
                      let endDate = range.end;

                      const duration = endDate.compare(startDate);

                      if (duration > 7) {
                        endDate = startDate.add({ days: 7 });
                      }

                      startField.onChange(startDate.toString());
                      endField.onChange(endDate.toString());
                    }}
                    isDateUnavailable={(date) => date.compare(todayDate) <= 0}
                  />
                )}
              />
            )}
          />

          <label
            htmlFor="numGuests"
            className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem] flex-[0_1_50%] min-w-0"
          >
            Nº de convidados
            <input
              {...register("numGuests", { valueAsNumber: true })}
              className="[&::-webkit-inner-spin-button]:appearance-none border border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
              type="number"
              id="numGuests"
              placeholder="Somente números"
              aria-label="Campo de número de convidados"
            />
          </label>

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Enviar
          </button>
        </form>
      </section>
    </I18nProvider>
  );
}
