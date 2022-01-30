import { render, screen } from '@testing-library/react';
import Search from './Search';

test('renders search information div', () => {
  render(<Search />);
  const divElement = screen.getByText(/Search : Paris - Lyon trips on 31st January 2022 around 02:00PM, price in £/i);
  expect(divElement).toBeInTheDocument();
});
