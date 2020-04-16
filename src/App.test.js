import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('app render without any error', () => {
  const { getByText } = render(<App />);
  // to be checked in expect 
});
