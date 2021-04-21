# Articles-evaluation app!

Evaluate a news Article with Natural Language Processing (NLP) is a project IV of Udacity's Front End Web Developer Nanaodegree Program.
This project uses an API through url entered by a user to run NLP on articles or blogs and to find whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

## Getting Started 

After cloning  (or downolading ZIP-folder) it's nessesary to use terminal and type there: 

```bash npm install```

## Setting up the API

### Step 1: Signup for an API key
Signup  [ MeaningCloud's] (https://www.meaningcloud.com/developer/create-account) for a license key to start using the API.

### Step 2: Environment Variables
 Use npm to install the ```bash dotenv ``` package npm install dotenv.

 Create a new ```bash.env``` file in the root of your project

 Fill the ```bash.env``` file with your API key like this:

```bash.API_KEY=**************************```
 Add this code to the very top of your server/index.js file:
```bash const dotenv = require('dotenv') dotenv.config()```

This means that our updated API credential settings will look like this:

const API_KEY = process.env.API_KEY


