import Recipe from "./component/Recipe";
import RecipeContainer from "./containers/RecipeContainer";


const RecipeList = ({recipes}) => {

    return (
    <>
    <h3> Hello Recipe List</h3>
    {
        recipes.map((recipe, index) => {
            return <Recipe key={index} cakeName={recipe.cakeName} ingredients={recipe.ingredients} rating={recipe.rating} />
        })
    }    
    </>
    )

}

export default RecipeList;