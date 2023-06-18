import Plan from '../Plan';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

describe('<Plan />', () => {
  it('renders correctly without required nor label...', () => {
    const tree = renderer
      .create(<Plan id='arcade' priceMonthly={9} priceYearly={999} isChecked={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
