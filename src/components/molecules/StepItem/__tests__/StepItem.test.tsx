import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import StepItem from '../StepItem';

describe('<StepItem />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<StepItem number={1} title='Test'></StepItem>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
