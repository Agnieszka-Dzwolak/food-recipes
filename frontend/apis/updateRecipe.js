const updateRecipe = async (id, recipe) => {
    try {
        const res = await fetch(`http://localhost:5002/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(recipe),
        });
        if (!res.ok) {
            throw new Error(
                `Failed to update the recipe with status ${res.status}`,
            );
        }
        return await res.json();
    } catch (err) {
        console.error(err);
    }
};

export default updateRecipe;
