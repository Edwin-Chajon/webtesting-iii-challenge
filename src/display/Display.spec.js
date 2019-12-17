import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Display from './Display';


//displays if gate is open/closed and locked/unlocked
test("Check open/closed and locked/unlocked display", () => {
  const { getByText, getByTestId } = render(<Display />);
  
  getByText(/open/i);
  getByText(/unlocked/i);
  getByText(/locked/i);
  getByTestId(/closed/i);
});

//'Closed' if the closed prop is true otherwise 'Open' 
test("'Closed' if the closed or 'Open' if open", () => {
  const { getByText, rerender } = render(<Display closed />);

  rerender(<Display closed={false} />);
  getByText(/open/i);
});

//'Locked' if the locked prop is true and 'Unlocked' if otherwise
test("'Locked' if true / 'Unlocked' if false", () => {
  const { getByText, rerender } = render(<Display locked />);
  getByText(/locked/i);//if display locked->show locked

  rerender(<Display locked={false} />);
  getByText(/unlocked/i); 
});
