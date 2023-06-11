import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import formData from 'src/formData';

import Sidebar from '../Sidebar';

describe('<Sidebar />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Sidebar data={formData}></Sidebar>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
