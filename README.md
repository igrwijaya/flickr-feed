## Flickr Feed Web App
> Simple web app with NextJs (React) and ExpressJS. Deploying using AWS Lambda and Vercel

### Frontend Tech Stack

 - Web URL: https://flickr-feed-nh228nm5s-igrwijaya.vercel.app
 - Framework: [NextJs](https://nextjs.org) (reactjs, typescript, jest unit test)
 - Deployment: [Vercel](https://vercel.com)

### Backend Tech Stack
- Web URL: https://d8jmmcey7igbk.cloudfront.net
		- endpoint: 
			- /flickr/fetch-image
			- /flickr/fetch-image?tags={string,string,string...}
- Framework: [ExpressJs](https://expressjs.com) (typescript, mocha unit test)
- Deployment:
	- AWS Lambda
	- AWS API Gateway
	- AWS Cloudfront

### How-to

> Make sure to copy the `.env.template` file to `.env` file before run the apps

Run Backend App:

    yarn run start

Run Frontend App:

    yarn run dev

Deploy Backend App:

    sam deploy -t deploy.yaml --profile your_aws_profile

Deploy Frontend App:

    You need to register to Vercel to deploy the frontend app
