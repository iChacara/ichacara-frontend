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
