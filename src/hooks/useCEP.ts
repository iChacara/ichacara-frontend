import { viaCepClient } from "@/lib/clients";
import { ViaCepAddressProps } from "@/lib/types";
import { useState } from "react";

export const useCEP = () => {
  const [cepData, setCepData] = useState<ViaCepAddressProps | null>(null);
  const [cepLoading, setCepLoading] = useState(false);
  const [cepError, setCepError] = useState<string | null>(null);

  const fetchCEP = async (cep: string) => {
    setCepLoading(true);
    setCepError(null);
    setCepData(null);

    try {
      if (cep.length === 9) {
        const { data } = await viaCepClient.get(`/${cep}/json/`);

        if (data.erro) {
          throw new Error("CEP não encontrado.");
        }

        setCepData(data);
      }
    } catch (err: any) {
      setCepError(err.message);
    } finally {
      setCepLoading(false);
    }
  };

  return { cepData, cepLoading, cepError, fetchCEP };
};
