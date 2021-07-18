First, check the serverless.yml and replace HERE_YOUR_PROFILE with your aws account

Then, run `npx sls deploy` to create this

Then in the bucket created, create a new folder called `public` and then upload the images from `menu_icons`

This thing works with appsync and a lambda called test, run the test query to check the response of the images

More info of this here:

https://stackoverflow.com/questions/68424460/trying-to-get-image-from-lambda-but-i-get-access-denied-with-the-amplify-client

In the roles created, add the policies specified in the question which are CognitoAuthorizedRole and CognitoUnAuthorizedRole -> remember to replace MY_BUCKET_HERE with the right ARN of your bucket
