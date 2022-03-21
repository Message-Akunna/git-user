import { render, screen } from '@testing-library/react';
import App from './App';

test('Search user', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search user/i);
  expect(linkElement).toBeInTheDocument();
});
