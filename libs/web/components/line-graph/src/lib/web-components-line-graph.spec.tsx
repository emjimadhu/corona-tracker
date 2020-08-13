import React from 'react';
import { render } from '@testing-library/react';

import WebComponentsLineGraph from './web-components-line-graph';

describe(' WebComponentsLineGraph', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebComponentsLineGraph />);
    expect(baseElement).toBeTruthy();
  });
});
