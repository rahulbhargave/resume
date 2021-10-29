export interface IResume {
    skillmessage: string;
    education: Array<IEducation>;
    work: Array<IWork> | [];
    skills: Array<ISkill>;
}
export interface IEducation {
    school: string;
    degree: string;
    graduated: string;
    description: string;
}
export interface IWork {
    company: string;
    title: string;
    years: string;
    description: string;
}
export interface ISkill {
    name: string;
    level: string;
}

