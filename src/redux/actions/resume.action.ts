import { hideLoader, showLoader, toggleError } from "./spinner.action";
import httpApis from '../../config/http.apis';
import { FETCH_RESUME_DATA } from "../actions.type";

export const FetchResumeData = () => async (dispatch: any) => {
    dispatch(showLoader());
    try {
        const response: any = await httpApis.get();

        setTimeout(() => {
            dispatch(hideLoader());
        }, 500)

        dispatch({
            type: FETCH_RESUME_DATA,
            payload: response.data,
        });
    } catch (error) {
        console.error(error);
        dispatch(toggleError());
        dispatch(hideLoader());
    }
}