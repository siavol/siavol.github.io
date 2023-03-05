import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders my name', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Ilya Shestakov/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders description', () => {
  render(<Header />);
  const linkElement = screen.getByText(/full stack developer/i);
  expect(linkElement).toBeInTheDocument();
});
