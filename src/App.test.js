import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByAltText('degas')).toBeInTheDocument();
    })

  });
})
