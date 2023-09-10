import Input from '../Input';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

describe('<Input />', () => {
  it('renders correctly without required nor label...', () => {
    const tree = renderer
      .create(<Input />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
