import { render, screen } from '@testing-library/react';
import NewBoxForm from './Newboxform';

it("renders without crashing", function() {
    render(<NewBoxForm />);
  });
  
  it("matches snapshot", function() {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });