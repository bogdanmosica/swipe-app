import { render } from '@testing-library/react';

import Remotion from './page';

describe('Remotion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Remotion />);
    expect(baseElement).toBeTruthy();
  });
});
