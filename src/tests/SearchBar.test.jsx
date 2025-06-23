import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('renders input and button', () => {
    render(<SearchBar onSearch={() => {}} />);
    expect(screen.getByPlaceholderText('Search recipes...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
})

test('fires search on Enter when query >= 3', () => {
    const mockSearch = vi.fn();
    render(<SearchBar onSearch={mockSearch} />);
    const input = screen.getByPlaceholderText('Search recipes...');
    fireEvent.change(input, {target: {value: 'piz'}});
    fireEvent.keyDown(input, {key: 'Enter'});
    expect(mockSearch).toHaveBeenCalled();
})