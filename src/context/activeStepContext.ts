import { createContext } from 'react';

type activeStepContextProps = {
  activeStep: number;
  setActiveStep?: (activeStep: number) => void;
};

const activeStepContext = createContext<activeStepContextProps>({
  activeStep: 0
});

export default activeStepContext;
