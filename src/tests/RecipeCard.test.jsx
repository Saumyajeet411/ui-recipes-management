import { render, screen } from '@testing-library/react';
import RecipeCard from '../components/RecipeCard';
import { expect, test } from 'vitest';

const mockRecipe = {
    id: 1,
    name: 'Test Pizza',
    image: 'https://example.com/image.jpg',
    cookTimeMinutes: 25,
    cuisine: 'Italian',
    tags: ['Pizza', 'Cheesy']
}

describe('RecipeCard', () => {
    test('renders recipe name and cuisine', () => {
        render(<RecipeCard recipe={mockRecipe} />);
        expect(screen.getByText('Test Pizza')).toBeInTheDocument();
        expect(screen.getByText(/Italian/)).toBeInTheDocument();
    });

    test('renders image with alt text', () => {
        render(<RecipeCard recipe={mockRecipe} />);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', mockRecipe.image);
        expect(img).toHaveAttribute('alt', mockRecipe.name);
    })

    test('renders cook time and tags'), () => {
        render(<RecipeCard recipe={mockRecipe} />);
        expect(screen.getByText('25 mins')).toBeInTheDocument();
        expect(screen.getByText(/Pizza, Cheesy/)).toBeInTheDocument();
    }

    test('handle null recipe safely', () => {
        const { container } = render(<RecipeCard recipe={null} />);
        expect(container.firstChild).toBeNull();
    })
})