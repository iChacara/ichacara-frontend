import { CEPData } from "@/lib/interfaces";
import { useState } from "react";

export const useCEP = () => {
  const [data, setData] = useState<CEPData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCEP = async (cep: string) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error("Erro ao buscar o CEP.");
      }

      const result: CEPData = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchCEP };
};
