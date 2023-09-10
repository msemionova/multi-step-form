import Addon from '../Addon';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

describe('<Addon />', () => {
  it('renders correctly without required nor label...', () => {
    const dummyProps = {
      id: 'addon',
      title: 'Addon Title',
      description: 'Addon Description',
      priceMonthly: 9,
      priceYearly: 999,
      isChecked: true
    };

    const tree = renderer
      .create(<Addon {...dummyProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
