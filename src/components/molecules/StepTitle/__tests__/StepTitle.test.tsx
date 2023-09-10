import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import StepTitle from '../StepTitle';

describe('<StepTitle />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<StepTitle number={1} title='Test'></StepTitle>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
