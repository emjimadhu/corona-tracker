import React from 'react';
import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    expect.assertions(1);

    const {
      getByText
    } = render(<App />);

    expect(getByText('Welcome to web!')).toBeTruthy();
  });
});
