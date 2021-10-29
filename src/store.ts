import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import GithubReducer from './redux/reducers/github.reducer';
import ResumeReducer from './redux/reducers/resume.reducer';
import SpinnerReducer from './redux/reducers/spinner.reducer';

export const store = configureStore({
  reducer: {
    data:ResumeReducer,
    spinner:SpinnerReducer,
    projects:GithubReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
