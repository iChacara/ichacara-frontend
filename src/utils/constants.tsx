import AccommodationStep from "@/components/AccommodationStep";
import AddressStep from "@/components/AddressStep";
import AvailableServicesStep from "@/components/AvailableServicesStep";
import ImagesStep from "@/components/ImagesStep";
import PrecificationStep from "@/components/PrecificationStep";
import PropertyStep from "@/components/PropertyStep";

export const ANNOUNCEMENT_STEPS = [
  {
    key: "address",
    name: "Endereço",
    fields: [
      "cep",
      "street",
      "number",
      "complement",
      "neighborhood",
      "city",
      "state",
    ],
    component: <AddressStep />,
  },
  {
    key: "accommodation",
    name: "Acomodação",
    fields: ["rooms", "beds", "bathrooms", "lotation"],
    component: <AccommodationStep />,
  },
  {
    key: "availableServices",
    name: "Serviços disponíveis",
    fields: [],
    component: <AvailableServicesStep />,
  },
  { key: "images", name: "Imagens", fields: [], component: <ImagesStep /> },
  { key: "property", name: "Chácara", fields: [], component: <PropertyStep /> },
  {
    key: "precification",
    name: "Precificação",
    fields: [],
    component: <PrecificationStep />,
  },
];
