import { FETCH_GITHUB_REPO } from '../actions.type';
import { IPortfolio } from '../../types/IPortfolio';

const initialState: Array<IPortfolio> | [] = [];
const GithubReducer = (data = initialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_GITHUB_REPO:
            return [ ...payload ];
        default:
            return data;
    }
}

export default GithubReducer;