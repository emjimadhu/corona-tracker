import React from 'react';
import { render } from '@testing-library/react';

import WebComponentsTable from './web-components-table.component';

describe(' WebComponentsTable', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(<WebComponentsTable />);

    expect(baseElement).toBeTruthy();
  });
});
