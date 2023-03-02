import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ilya Shestakov/i);
  expect(linkElement).toBeInTheDocument();
});
