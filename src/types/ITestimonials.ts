export interface ITestimonials {
    testimonials: Array<ITestimonial> | [];
}

export interface ITestimonial {
    text: string;
    user: string;
    designation?: string;
    image?:string;
    url?:string;
    organization?: string;
}