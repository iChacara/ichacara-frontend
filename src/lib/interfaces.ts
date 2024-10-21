export interface ProviderProps {
  children: React.ReactNode;
}

export interface Step {
  key: string;
  name: string;
  fields: any[];
  component: JSX.Element;
}

export interface StepsContextProviderProps extends ProviderProps {
  steps: Step[];
}

export interface CEPData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  estado: string;
  regiao: string;
  unidade: string;
  erro: string;
}
