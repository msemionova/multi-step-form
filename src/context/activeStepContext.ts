import { createContext } from 'react';

type activeStepContextProps = {
  activeStep: number;
  setActiveStep: (activeStep: number) => void;
};

const activeStepContext = createContext<activeStepContextProps>({
  activeStep: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setActiveStep: () => { }
});

export default activeStepContext;
