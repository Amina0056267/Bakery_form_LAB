
const Recipe = ({cakeName, ingredients, rating}) => {
    return (
        <div className="recipe">
            <header>Recipe: {cakeName} </header>
            <main>
                <ul>
                    <li>ingredients: {ingredients}</li>
                    <li>Rating: {rating}</li>
                </ul>
            </main>
        </div>
    )
}

export default Recipe;