import { useState } from "react";

const NewRecipe = ({onSubmit})=> {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState(0);

    const handleCakeNameChange = (event) => {
        setCakeName(event.target.value);
    }

    const handleIngredientsChange = (event) => {
        setIngredients(event.target.value);
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();
        const newRecipe = {
            cakeName: cakeName,
            ingredients: ingredients,
            rating: rating,
        }
        
        onSubmit(newRecipe);
    }

    return (
        <form onSubmit={handleFormSubmission}>
            <label htmlFor="name">Cake name:</label>
            <input 
                type="text" 
                id="name"
                onChange={handleCakeNameChange}
            />
            <label htmlFor="ingredients">Ingredients:</label>
            <input 
                type="text"
                id="ingredients" 
                onChange={handleIngredientsChange}
            />
            <label htmlFor="rating">Rating:</label>
            <input 
                type="number" 
                id="rating"
                onChange={handleRatingChange}
            />
            <input type="submit" value="Add Recipe"/>
        </form>
    );
}

    export default NewRecipe;