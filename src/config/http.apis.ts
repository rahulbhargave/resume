import http from './http.common';

const get = () => {
    return http.get(`${process.env.REACT_APP_BASE_URL}/resumeData.json`);
};

const getRepos = () =>{
    return http.get(`https://api.github.com/users/${process.env.REACT_APP_GIT_USER}/repos?per_page=5`);
}

const httpApis = {
    get,
    getRepos
};

export default httpApis;