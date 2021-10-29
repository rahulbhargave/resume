import { FETCH_RESUME_DATA } from '../actions.type';
import { IResumeData } from '../../types/IResumeData';

const initialState: IResumeData | {} = {};
const ResumeReducer = (data = initialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_RESUME_DATA:
            return { ...payload };
        default:
            return data;
    }
}

export default ResumeReducer;