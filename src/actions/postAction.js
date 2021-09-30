export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const LINE_THROUGTH = "LINE_THROUGTH";



// action d'affichage
const getPost = (data) => {

    return {
        type : GET_POSTS,
        payload : data
    }
}
export default getPost;


// action d'ajout
export const addPost = (data) => {

    return {
        type : ADD_POSTS,
        payload : data
    }
}

//action d'editeur
export const postEdit = (data) => {

    return {
        type : EDIT_POST,
        payload : { ...data }
    }
} 

// action de suppression
export const deletePost = (dataId) => {

    return {
        type : DELETE_POST,
        payload : { dataId }
    }
}

//action pour faire un toggle sur le trait sur le texte
export const changeLine = (line) => {
    return {
        type: LINE_THROUGTH,
        payload :  { ...line }
    }
}

