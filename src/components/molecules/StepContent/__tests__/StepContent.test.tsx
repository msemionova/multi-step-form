import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import formData from 'src/data/formData';

import StepContent from '../StepContent';

describe('<StepContent />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<StepContent stepData={formData[0]}></StepContent>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
