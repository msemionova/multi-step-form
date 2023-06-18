import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import PaymentType from '../PaymentType';

describe('<PaymentType />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PaymentType />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
