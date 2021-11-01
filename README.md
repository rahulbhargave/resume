## Rahul Bhargave Website 

## Live Demo
<a href="http://rahul-bhargave-resume.s3-website.eu-central-1.amazonaws.com/">Live Demo</a>


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## API enpoints used
1) https://s3.eu-central-1.amazonaws.com/resume.static.data/resumeData.json
2) https://api.github.com/users/<git_user_name>/repos?per_page=5

## Project Features
1) This application is developed with React, Redux, Typescript
2) This project fetches data from two sources (AWS S3 bucket endpoint & github public API)
3) This project is responsive & mobile device friendly.
4) This project is hosted in AWS S3 bucket check my Medium article for the same <a href="https://aws.plainenglish.io/independent-test-environment-for-ui-developers-using-aws-s3-1c4abe48bd89">HERE</a>.
5) Project is mapped with domain http://rahulbhargave.com using Route53, check my Medium article about then same <a href="https://aws.plainenglish.io/link-s3-bucket-static-website-to-domain-name-using-route53-b196a9bf9c54">HERE</a> for the same.

## Limitation & Future Scope
1) Currently recommendations from LinkedIn are replicated at our source data, later this will be fetched from LinkedIn's Profile API
2) My linked github repository doesn't have notable projects to highlight, so kindly excuse on that section. 
3) For testimonials / recommendation section, slider can be added. (but I thought with slider there will be less chances for someone to reach till end of slider to check all comments so kept as a list & placed as last section of website)
4) Can create inline command to deploy it to S3 bucket in one click using `sudo aws s3 sync ./build s3://<bucket_name>/`
5) Jest(Unit) & Cypress(e2e) test cases are pending.

## Some Glimpse of Website

<img width="1423" alt="image" src="https://user-images.githubusercontent.com/41572852/139424074-c1b407f0-2b6a-4889-80d0-4708fcd9307b.png">

<img width="1423" alt="image" src="https://user-images.githubusercontent.com/41572852/139424018-79d6b660-2c52-4d93-be9a-df07960a1c79.png">

<img width="1423" alt="image" src="https://user-images.githubusercontent.com/41572852/139424185-4ccad7aa-368a-4bb3-81f7-670756b26763.png">

<img width="434" alt="image" src="https://user-images.githubusercontent.com/41572852/139443836-ccdd1069-3325-43d7-8ba1-41fc41ab16d4.png">

<img width="434" alt="image" src="https://user-images.githubusercontent.com/41572852/139443883-76f71b18-f5e9-4103-83f3-d07cdeed4015.png">

<img width="434" alt="image" src="https://user-images.githubusercontent.com/41572852/139443945-ce105ca3-25dd-4fa7-b165-327a08ba064b.png">

