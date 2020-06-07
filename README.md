
### Summary 

This is the Final Project of Udacity Nanodegree Program. It's the Capstone Project. In this project, I choose serverless technology to build a ToDo application & deployed in AWS.

- AWS Lamda has been used to develop the backend part using serverless technology
- Client developed in React
- Deployed the project in S3 using the static web page function

### Git Repo: https://github.com/mosaddek082751/Udacity-Capstone.git

### Applicaiton Link: http://capstone-serverless-mosaddek082751.s3-website-us-east-1.amazonaws.com/

The project I did using EC2 instance.


## Backend

Below major function is mandatory for this project along with serverless.yml file configuration.

- **Auth** - this function implements a custom authorizer for API Gateway and has been added to all other functions.
- **GetTodos** - Current user will get the all todo. A user id can be extracted from a JWT token that is sent by the frontend
- **CreateTodo** - A current user can create something using this. A shape of data send by a client application to this function can be found in the CreateTodoRequest.ts file
- **UpdateTodo** - A existing user can update. A shape of data send by a client application to this function can be found in the UpdateTodoRequest.ts file
- **DeleteTodo** - Deleting a Todo by the existing user. Expects an id of a TODO item to remove.
- **GenerateUploadUrl** - This returns a pre-signed URL that can be used to upload an attachment file for a TODO item.
By the way this also need to add any necessary resources to the resources section of the serverless.yml file like DynamoDB table and S3 bucket.

## Frontend

A web application exist in the client folder that uses the API which need to be developed in this project.

Fronted work with the serverless backend application and editing with the necessary info in the config.ts file and doing Auth0 configuration will be enough to run the frontend part. But make sure the acount creation in Auth.com and inserting the certificate properly.
```
const apiId = '...' API Gateway id
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: '...',    // Domain from Auth0
  clientId: '...',  // Client id from an Auth0 application
  callbackUrl: 'http://localhost:3000/callback'
}
```
## Some key steps:

- Auth strategy is being handled per function as configuration. Which actually help the application to scale and implement different types of logic in future.
- Loging and tracing has been implemented for debugging problems.
- Todo items are fetching using query() method which actually more efficient for larger database.

## Run the applicaiton

For **Backend** below command has been used to run the applicatiion:
```
cd backend
npm install
sls deploy -v
```
To run the **Frontend** below command has been used:
```
cd client
npm install
npm run start
```
Though frontend is currently hosted in AWS S3 and if anyone want to run it locally then change in the the config.ts file is required to set right values in parameters. And the run the above command. 


