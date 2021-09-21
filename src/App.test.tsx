import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import GameBoard from './Game-Board/Game-Board'
import Card from './components/Card'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('GameBoard', () => {
  render(<GameBoard />)
  it("has the Game Board when the application loads",()=> {
    const element = screen.getByText("Match Game!");

    expect(element).toBeInTheDocument;
  });
})