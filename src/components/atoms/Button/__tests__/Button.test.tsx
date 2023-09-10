import Button from '../Button';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('<Button />', () => {
  const mockOnClick = jest.fn();
  const buttonText = 'Test Button';

  it('renders correctly', () => {
    const tree = renderer
      .create(<Button onClick={mockOnClick}>{buttonText}</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with customCssClass and secondary passed', () => {
    const tree = renderer
      .create(
        <Button
          onClick={mockOnClick}
          type='primary'
        >
          {buttonText}
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display the text passed as props', () => {
    const { getByText } = render(<Button onClick={mockOnClick}>{buttonText}</Button>);
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  it('should trigger the passed function if clicked', () => {
    render(<Button id='button-test' onClick={mockOnClick}>{buttonText}</Button>);
    const element = screen.getByTestId('button-test');
    expect(mockOnClick).not.toBeCalled();
    fireEvent.click(element);
    expect(mockOnClick).toBeCalled();
  });
});
