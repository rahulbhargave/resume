export interface IMainInfo {
    name: string;
    occupation: string;
    description: string;
    image: string;
    bio: string;
    contactmessage: string;
    email: string;
    phone: string;
    address: {
        street: string;
        city: string;
        state: string;
        country: string;
        zip: string;
    };
    website: string;
    resumedownload: string;
    social: [{
        name: string;
        url: string;
        className: string;
    }];
}