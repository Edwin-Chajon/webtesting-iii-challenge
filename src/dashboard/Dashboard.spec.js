import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test("Controls and Display rendering correctly", () => {
    const { getByText } = render(<Dashboard />);
    const controls = getByText(/Close Gate/i);
    const display = getByText(/Unlocked/i);
  
    expect(controls).toBeDefined();
    expect(display).toBeDefined();
  });