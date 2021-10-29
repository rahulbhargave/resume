import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import { fetchRepos } from "./redux/actions/github.action";
import { FetchResumeData } from "./redux/actions/resume.action";
import { RootState } from "./store";
import { IPortfolio } from "./types/IPortfolio";
import { IResumeData } from "./types/IResumeData";

const App = () => {
  const data: IResumeData = useSelector((state: RootState) => state.data);
  const projects: Array<IPortfolio> = useSelector(
    (state: RootState) => state.projects
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchResumeData());
    dispatch(fetchRepos());
  }, [dispatch]);

  return (
    <>
      {data?.main && (
        <div className="App">
          <Header main={data.main} />
          <About main={data.main} />
          <Resume resume={data.resume} />
          <Portfolio projects={projects} />
          <Testimonials testimonials={data.testimonials} />
          <Footer main={data.main}/>
        </div>
      )}
    </>
  );
};

export default App;
