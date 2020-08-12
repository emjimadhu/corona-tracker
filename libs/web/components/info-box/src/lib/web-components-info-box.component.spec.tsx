import React from 'react';
import { render } from '@testing-library/react';

import WebComponentsInfoBox from './web-components-info-box.component';

describe(' WebComponentsInfoBox', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(<WebComponentsInfoBox />);

    expect(baseElement).toBeTruthy();
  });
});
