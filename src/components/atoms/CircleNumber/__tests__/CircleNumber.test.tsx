import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import CircleNumber from '../CircleNumber';

describe('<CircleNumber />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CircleNumber>Test</CircleNumber>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display the text passed as props', () => {
    const { getByText } = render(<CircleNumber>Test</CircleNumber>);
    expect(getByText('Test')).toBeInTheDocument();
  });
});
