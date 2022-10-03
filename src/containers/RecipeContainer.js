import {useState} from "react";
import NewRecipe from "../component/NewRecipe";
import RecipeList from "../RecipeList";



const RecipeContainer = ()=> {
    const [recipes, setRecipes] = useState([
        
                {
                    cakeName: "Lemon Drizzle",
                    ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
                    rating: 5
                },
                {
                    cakeName: "Tea Loaf",
                    ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
                    rating: 3
                },
                {
                    cakeName: "Brownie",
                    ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
                    rating: 4
                },
                {
                    cakeName: "Carrot Cake",
                    ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
                    rating: 5
                }
            
    ])

    }

    const addNewRecipe =()=> {
        const newRecipe = {
            cakeName: "Chocolate Cake",
            ingredients: ["chocolate chip", "baking powder", "oil", "egg", "flour", "sugar"],
            rating: 5
        }

        const updatedRecipes =[...recipes, newRecipe];
    }


    return (
        <>
        <h2>Recipes</h2>
        <NewRecipe onClick={addNewRecipe} />
        <RecipeList recipes={recipes} />
        </>
    )

    

;

export default RecipeContainer;