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
}
    export default NewRecipe;