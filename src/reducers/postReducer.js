import { 

    ADD_POSTS, 
    DELETE_POST,
    EDIT_POST, 
    GET_POSTS, 
    LINE_THROUGTH

} from "../actions/postAction";


const initialState = {
    posts : []
};

const postReducer = ( state = initialState, action ) => {

    switch(action.type) {
        
        case GET_POSTS :
            return  [...state.posts]

        case ADD_POSTS : 
            return [action.payload, ...state]
                
        case EDIT_POST:
            return state.map((post) => {
                if(post.id === action.payload.id){
                    return {
                        ...post,
                        description: action.payload.description
                    }
                }else{
                    return post
                }
            })

        case DELETE_POST :
            return state.filter((post) => post.id !== action.payload.dataId)
        

        case LINE_THROUGTH:
            return state.map((post) => {
                if(post.id === action.payload.id) {
                    return {
                        ...post,
                        isDone: action.payload.isDone
                    }
                }else{
                    return post
                }
            })
        
        default:
            return state
    }

};

export default postReducer;

