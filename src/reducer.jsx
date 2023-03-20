export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQA0L6AFgioshSUQxD1D6F4iGmVysubM-Hon-gDtptMrQTyE_iJONME05hhvhJZH-GrAgFqAMdrImS_aWLrqPLdEvibAfVwA9lSaBkt8566SW5Sxx4OYRnIPJ-kLTuo4niE3GxSqaAEuUDazZLBkdEC0PPIAtd1vztvVZUVevlwB5m7P1vZIOulyh8LgzCvNV3yqgZ2sAwUl5Dxlsg',
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
            
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            }

        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        
        default:
            return state
    }
}

export default reducer