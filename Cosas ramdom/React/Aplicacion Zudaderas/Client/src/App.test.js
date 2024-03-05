import { render, screen } from '@testing-library/react';
import MyApp from './MyApp';

test('renders the image carousel in MyApp', () => {
  render(<MyApp />);

  // Suponiendo que quieres verificar la presencia de la primera imagen del carrusel
  const firstImage = screen.getByAltText('Image 1');

  expect(firstImage).toBeInTheDocument();
});
