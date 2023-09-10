import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import formData from 'src/data/formData';
import FieldGroup from '../FieldGroup';

describe('<FieldGroup />', () => {
  it('renders correctly', () => {
    const fieldGroupData = formData[0]?.fieldGroups?.[0];
    const tree = renderer
      .create(<FieldGroup fieldGroupData={fieldGroupData}></FieldGroup >)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
