import dom from '../dom.js';
import deleteRecipe from '../../apis/deleteRecipe.js';

const deleteHandler = async (id) => {
    //dom
    const recipeToDelete = document.getElementById(id);
    recipeToDelete.remove();

    //api
    const res = await deleteRecipe(id);
};

export default deleteHandler;
