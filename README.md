# Melvin.js Sample App
## A sample application implementation with Melvin.js

## Setup and requirements
Node.js ^0.10.x, Grunt.js

    npm start
    
Now run at the root of the app your favorite static server. For instance, if you have python installed you can run

    python -m SimpleHTTPServer
    
# Application Deployment
## Local deployment
For local deployments, you need to run the default grunt task by simply executing:

    grunt
    
## Production deployment
This task is more complex, is executing the default one and after that performs several other steps to get your resources
ready for production

    grunt production