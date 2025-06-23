import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if(query.length >=3) onSearch(query);
    }

    return (
        <div className="inputgroup my-3">
            <input className="form-control"
                placeholder='Search recipes...'
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && handleSearch()}
            />
            <button className="btn btn-outline-secondary text-right" onClick={handleSearch}>
                <FaSearch />
            </button>
        </div>
    )
}
