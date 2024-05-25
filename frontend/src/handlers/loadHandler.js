import dom from '../dom.js';
import getRecipes from '../../apis/getRecipes.js';
import createRecipe from '../components/createRecipe.js';

const loadHandler = async () => {
    //get data from backend
    const recipes = await getRecipes();

    //dom
    recipes.forEach((recipe) => {
        const recipeDom = createRecipe(recipe);
        dom.recipes.append(recipeDom);
    });
};

export default loadHandler;
