import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
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

  it('should have no extra class by default', () => {
    render(<CircleNumber>Test</CircleNumber>);

    const element = screen.getByText('Test');
    expect(element).toHaveClass('circle');
  });

  it('should have "active" class if is active', () => {
    render(<CircleNumber isActive={true}>Test</CircleNumber>);

    const element = screen.getByText('Test');
    expect(element).toHaveClass('circle active');
  });
});
