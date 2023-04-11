import { CREATE_COMMENT, ICommentState, ICommentType, GET_COMMENT } from "../types/commentType";

const initialState = {
    data: [],
    total: 1
}

const commentReducer = (
    state: ICommentState = initialState,
    action: ICommentType
): ICommentState => {
    switch(action.type){
        case CREATE_COMMENT:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case GET_COMMENT:
            return action.payload
        default:
            return state
    }
}

export default commentReducer