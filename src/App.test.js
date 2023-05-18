import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe('test App', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.queryByText(/learn react/i);
    expect(linkElement).not.toBeInTheDocument();
  })

  

})
