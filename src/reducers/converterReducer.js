const intialState = {elements: []}

export default function loadRecipesReducer(state = intialState, action) {
// debugger
    switch (action.type) {
        case 'LOAD_ELEMENT':
            // const baseQuery = action.payload["results"][0]
            const baseQuery = action.payload
        // console.log('🚀 ~ line 11 ~ recipesReducer ~ baseQuery', baseQuery);
        
            return {elements: baseQuery}

        // case 'ADD_ELEMENT':
        //     let newRecipe = action.payload
        //     return {...state.loadRecipes, loadRecipes: state.recipes.concat(newRecipe)}

        default:
            // return {...state}
            return state
    }

}
