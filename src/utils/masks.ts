export const CEPMask = (CEP: string) => {
  const cleanedCEP = CEP.replace(/\D/g, "").slice(0, 8);

  if (cleanedCEP.length <= 5) {
    return cleanedCEP;
  }

  const match = cleanedCEP.match(/(\d{5})(\d{0,3})/);
  return match ? `${match[1]}-${match[2]}` : cleanedCEP;
};
