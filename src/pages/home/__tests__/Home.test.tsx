import { render, screen } from '@testing-library/react';

import Home from '../Home';

describe('Home', () => {
  it('should render correctly', () => {
    render(<Home />);
    expect(screen.getByText('Titulo')).toBeInTheDocument();
  });
});
