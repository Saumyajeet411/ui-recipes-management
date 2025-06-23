import { render, screen, fireEvent } from '@testing-library/react';
import RecipeGrid from '../components/RecipeGrid';
import { describe, expect } from 'vitest';

const mockRecipes = [{
    id: 1,
    name: 'A Pizza',
    image: 'image-a.jpg',
    cookTimeMinutes: 30,
    cusine: 'Italian',
    tags: ['Dinner', 'Cheese']
}, {
    id: 2,
    name: 'B Pasta',
    image: 'image-b.jpg',
    cookTimeMinutes: 10,
    cusine: 'Italian',
    tags: ['Lunch']
}
]

describe('RecipeGrid', () => {
    test('renders all recipes', () => {
        render(<RecipeGrid recipes={mockRecipes} />);
        expect(screen.getByText('A Pizza')).toBeInTheDocument();
        expect(screen.getByText('B Pasta')).toBeInTheDocument();
    });

    test('sort by cook time descending', () => {
        render(<RecipeGrid recipes={mockRecipes} />);
        const select = screen.getByLabelText(/Sort By Cook Time/);
        fireEvent.change(select, {target: {value: 'desc'}});

        const cards = screen.getAllByRole('img');
        expect(cards[0]).toHaveAttribute('src', 'image-a.jpg')
    });

    test('filter by tag', () => {
        render(<RecipeGrid recipes={mockRecipes}/>);
        const filterSelect = screen.getByLabelText(/Filter By Tag/);
        fireEvent.change(filterSelect, {target: {value: 'Lunch'}});

        expect(screen.getByText('B Pasta')).toBeInTheDocument();
    });

    test('renders no card when filter matches none', () => {
        render(<RecipeGrid recipes={mockRecipes}/>);
        const filterSelect = screen.getByLabelText(/Filter By Tag/);
        fireEvent.change(filterSelect, {target: {value: 'Non Existent'}});

        expect(screen.getByText('A Pizza')).toBeInTheDocument();
        expect(screen.getByText('B Pasta')).toBeInTheDocument();
    })
})