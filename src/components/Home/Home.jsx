import SearchBar from "../SearchBar";
import RecipeGrid from "../RecipeGrid";
import { useEffect, useState } from "react";
import api from "../../services/recipeService";
import { toast } from 'react-toastify';

export default function Home() {
    const [ recipes, setRecipes ] = useState([]);

    useEffect(() => {
        handleSearch();
    }, [])

    const handleSearch = async (query) => {
        try{
            const response = await api.get("", { 
                params: { query } 
            });
            setRecipes(response.data);
        } catch(err) {
            toast.error('Failed to fetch recipes');
        }
    }
  return (
    <div className="container mt-4">
        <SearchBar onSearch={(query) => handleSearch(query)} />
        <RecipeGrid recipes={recipes} />
    </div>
  )
}
