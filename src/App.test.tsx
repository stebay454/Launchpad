/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders the launchpad heading', () => {
    render(<App />);
    const heading = screen.getByText(/Launchpad is Live/i);
    expect(heading).toBeInTheDocument();
  });
});
