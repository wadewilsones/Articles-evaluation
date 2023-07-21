# Articles-evaluation app!

This project uses an API through url entered by a user to run NLP on articles or blogs and to find whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

## Getting Started 

After cloning the project go to the project root folder and in terminal:

```npm install```

## Setting up the API

### Step 1: Signup for an API key
Signup  [MeaningCloud's](https://www.meaningcloud.com/developer/create-account) for a license key to start using the API.

### Step 2: Environment Variables
 Use npm to install the ```dotenv ``` package npm install dotenv.

 Create a new ```.env``` file in the root of your project

 Fill the ```.env``` file with your API key like this:

```API_KEY=**************************```

 Add this code to the very top of your server/index.js file:
 
```const dotenv = require('dotenv') dotenv.config()```

This means that our updated API credential settings will look like this:

```const API_KEY = process.env.API_KEY```

