import { useState } from "react"
import RecipeCard from "./RecipeCard";

export default function RecipieGrid({ recipes }) {
    const [ sortOrder, setSortOrder ] = useState('asc');
    const [ filterTag, setFilterTag ] = useState('');
    const sortedRecipes = [...recipes].sort((a,b) => {
        return sortOrder === 'asc' ? a.cookTimeMinutes - b.cookTimeMinutes : b.cookTimeMinutes - a.cookTimeMinutes;
    })
    const tags = [...new Set(recipes.flatMap(r => r.tags))];

    const filteredRecipes = filterTag ? 
        sortedRecipes.filter(r => r.tags.includes(filterTag)) : sortedRecipes;

  return (
    <div className="justify-content-between mb-3">
        <div className="my-2">
            <div>
            <label htmlFor="sortOrder" className="me-2">Sort By Cook Time:</label>
            <select id = "sortOrder" className="form-select" style={{width: '150px'}} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
        <div>
            <label htmlFor="filterTag" className="me-2">Filter By Tag:</label>
            <select id="filterTag" className="form-select" style={{width: '150px'}} onChange={(e) => setFilterTag(e.target.value)}>
                <option value="">All</option>
                {tags.map(tag => <option key={tag}>{tag}</option>)}
            </select>
        </div>
        <br />
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {filteredRecipes.map( recipe => (
                <div className="col" key={recipe.id}>
                    <RecipeCard recipe={recipe} />
                </div>
            ))}
        </div>
    </div>
  )
}
