export default function RecepieCard( { recipe } ) {
    if(!recipe) return null;
  return (
    <div className="card h-100">
        <img src={recipe.image} alt={recipe.name} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">{recipe.name}</h5>
            <p className="card-text">{recipe.cuisine} . {recipe.cookTimeMinutes} mins</p>
            <p><strong>Tags:</strong> S{recipe.tags.join(', ')}</p>
        </div>
    </div>
  )
}
