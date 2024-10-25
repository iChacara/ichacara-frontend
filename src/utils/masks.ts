export const CEPMask = (CEP: string) => {
  const cleanedCEP = CEP.replace(/\D/g, "").slice(0, 8);

  if (cleanedCEP.length <= 5) {
    return cleanedCEP;
  }

  const match = cleanedCEP.match(/(\d{5})(\d{0,3})/);
  return match ? `${match[1]}-${match[2]}` : cleanedCEP;
};

export const PriceMask = (priceValue: string | undefined) => {
  const value = priceValue
    ? parseFloat(priceValue.replace(/[^\d,.-]/g, "").replace(",", "."))
    : 0;

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
};
