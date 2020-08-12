import React from 'react';
import { render } from '@testing-library/react';

import WebComponentsMap from './web-components-map.component';

describe(' WebComponentsMap', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(<WebComponentsMap />);

    expect(baseElement).toBeTruthy();
  });
});
