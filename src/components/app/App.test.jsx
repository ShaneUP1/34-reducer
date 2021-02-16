/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {

  beforeEach(() => {
    render(<App />);
  });

  it('changes the current color display', async() => {
    const colorInput = screen.getByLabelText('Input Color');
    const currentBackgroundColor = screen.getByTestId('display');

    fireEvent.change(colorInput, { target: { value: '#00FF00' } });
    
    expect(currentBackgroundColor).toHaveStyle({ backgroundColor: '#00FF00' });
  });

  it('returns to the last color input when the undo button is clicked', () => {
    const undoInput = screen.getByText('undo');
    const currentBackgroundColor = screen.getByTestId('display');
    const colorInput = screen.getByLabelText('Input Color');

    fireEvent.change(colorInput, { target: { value: '#00FF00' } });
    fireEvent.click(undoInput);

    expect(currentBackgroundColor).toHaveStyle({ backgroundColor: '#FF0000' });
  });

  it('changes teh background color to a future state when redo is clicked', () => {
    const undoInput = screen.getByText('undo');
    const redoInput = screen.getByText('redo');
    const currentBackgroundColor = screen.getByTestId('display');
    const colorInput = screen.getByLabelText('Input Color');

    fireEvent.change(colorInput, { target: { value: '#00FF00' } });
    fireEvent.click(undoInput);
    fireEvent.click(redoInput);

    expect(currentBackgroundColor).toHaveStyle({ backgroundColor: '#00FF00' });
  });
});
