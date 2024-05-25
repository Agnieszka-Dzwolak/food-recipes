import deleteHandler from '../handlers/deleteHandler.js';
import editHandler from '../handlers/editHandler.js';

const createRecipe = (recipe) => {
    //container
    const container = document.createElement('div');
    container.id = recipe._id;
    container.classList.add('container');

    // title and image container
    const titleImageContainer = document.createElement('div');
    titleImageContainer.classList.add('title-image-container');

    //rest container
    const restContainer = document.createElement('div');
    restContainer.classList.add('rest-container');

    //btn container
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    //title
    const title = document.createElement('h2');
    title.innerText = recipe.title;
    title.classList.add('title');

    //ingredients
    const ingredients = document.createElement('p');
    ingredients.innerText = recipe.ingredients;
    ingredients.classList.add('ingredients');

    //instructions
    const instructions = document.createElement('p');
    instructions.innerText = recipe.instructions;
    instructions.classList.add('instructions');

    //image
    const image = document.createElement('img');
    image.src = recipe.image;
    image.alt = recipe.title;
    image.classList.add('img');

    //delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', () => {
        deleteHandler(recipe._id);
    });

    //edit btn
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.classList.add('edit-btn');

    editBtn.addEventListener('click', () => {
        editHandler(recipe);
    });

    //append
    titleImageContainer.append(title, image);
    restContainer.append(ingredients, instructions, btnContainer);
    btnContainer.append(deleteBtn, editBtn);

    container.append(titleImageContainer, restContainer);

    return container;
};

export default createRecipe;
