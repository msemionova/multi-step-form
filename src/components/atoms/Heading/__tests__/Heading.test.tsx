import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import Heading from '../Heading';

describe('<Heading />', () => {
  const title = 'Title';
  const subtitle = 'Subtitle';

  it('renders correctly', () => {
    const tree = renderer
      .create(<Heading title={title} subtitle={subtitle} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
