import { IMainInfo } from './IMainInfo';
import { IResume } from './IResume';
import { IPortfolio } from './IPortfolio';
import { ITestimonials } from './ITestimonials';

export interface IResumeData {
    main?: IMainInfo;
    resume?: IResume;
    portfolio?: Array<IPortfolio> | [];
    testimonials?: ITestimonials;
};