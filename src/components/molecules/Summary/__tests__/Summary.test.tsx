import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import Summary from '../Summary';

describe('<Summary />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Summary />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
