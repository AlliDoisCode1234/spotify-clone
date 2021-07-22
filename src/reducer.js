export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // REMOVE AFTER FINISHED DEVELOPING...
    // token: 'BQBzQSmLzXdcGoOQdt9IQdxOUXNyfRfxf0i0d2f0SsNTvNQNPKuwrWFaItLLi8mFNG2nzIF_rlNjV8GFTXzdAPrxT3tYici5h_xzoaGHUclK6NSndu3EJk2Cnt3Fhl0MnGKzKuGxVQobQ7MRGsvDJAabsik',
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default: 
            return state;
    }


}


export default reducer;