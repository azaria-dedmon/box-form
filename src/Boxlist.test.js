import { render, screen } from '@testing-library/react';
import Boxlist from './Boxlist';

it("renders without crashing", function() {
    render(<Boxlist />);
  });
  
  it("matches snapshot", function() {
    const { asFragment } = render(<Boxlist />);
    expect(asFragment()).toMatchSnapshot();
  });