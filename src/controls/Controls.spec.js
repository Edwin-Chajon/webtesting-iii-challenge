import React from 'react';
import { render, fireEvent } from '@testing-library/react';


import Controls from './Controls';

test("defaults to unlock/open", () => {
    const { getByText } = render(<Controls locked closed />)

    getByText('Unlock Gate' && 'Open Gate')
});