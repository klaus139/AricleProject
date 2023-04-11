import {Dispatch} from 'redux'
import {ALERT, IAlertType} from '../types/alertType';

import {IComment} from '../../utils/Type'
import { getAPI, postAPI } from '../../utils/FetchData';
import { CREATE_COMMENT, GET_COMMENT, ICreateCommentType, IGetCommentsType} from '../types/commentType';

export const createComment = (
    data: IComment, token: string
) => async(dispatch: Dispatch<IAlertType | ICreateCommentType>) => {
    try{
        const res = await postAPI('comment', data, token)
        console.log(res)
        dispatch({
            type: CREATE_COMMENT,
            payload: {...res.data, user: data.user}
        })

    }catch(err:any){
      dispatch({ type: ALERT, payload: { errors: err.response.data.msg}})
    }
}


export const getComments = (
    id: string
) => async(dispatch: Dispatch<IAlertType | IGetCommentsType>) => {
    try{
        const res = await getAPI(`comment/blog/${id}`)
       dispatch({
        type: GET_COMMENT,
        payload: {
            data: res.data.comments,
            total: res.data.total
        }
       })
      

    }catch(err:any){
      dispatch({ type: ALERT, payload: { errors: err.response.data.msg}})
    }
}