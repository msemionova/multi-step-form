import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import formData from 'src/formData';

import StepContent from '../StepContent';

describe('<StepContent />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<StepContent data={formData}></StepContent>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
