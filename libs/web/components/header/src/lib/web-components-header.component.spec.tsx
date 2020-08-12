import React from 'react';
import { render } from '@testing-library/react';

import WebComponentsHeader from './web-components-header.component';

describe(' WebComponentsHeader', () => {
  it('should render successfully', () => {
    expect
      .assertions(1);

    const {
      baseElement
    } = render(
      <WebComponentsHeader />);

    expect(baseElement).toBeTruthy();
  });
});
