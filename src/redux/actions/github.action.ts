import { toggleError } from "./spinner.action";
import httpApis from '../../config/http.apis';
import { FETCH_GITHUB_REPO } from "../actions.type";


export const fetchRepos = () => async (dispatch: any) => {
    try {
        const res = await httpApis.getRepos();
        const data = res.data.map((repo: any) => {
            const { node_id,name, html_url } = repo;
            return {
                name,
                html_url,
                node_id
            }
        })

        dispatch({
            type: FETCH_GITHUB_REPO,
            payload: data,
        });
    } catch (error) {
        console.log(error);
        dispatch(toggleError());
    }
}