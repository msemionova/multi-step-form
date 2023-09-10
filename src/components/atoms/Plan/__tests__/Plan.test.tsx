import Plan from '../Plan';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

describe('<Plan />', () => {
  it('renders correctly without required nor label...', () => {
    const dummyProps = {
      id: 'plan',
      priceMonthly: 9,
      priceYearly: 999,
      isChecked: true
    };

    const tree = renderer
      .create(<Plan {...dummyProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
