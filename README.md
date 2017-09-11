[![Build Status](https://travis-ci.org/jk47/caseStudy.svg?branch=master)](https://travis-ci.org/jk47/caseStudy)

# Setting up the Code
`yarn install` to install all dependencies

`yarn start` to run dev server at localhost:3000

`yarn test` to run tests from project

`yarn build` to package the code

# Continuous Delivery Strategy

`Local Dev Branch` -> `PR` -> `Merge to master` -> `Promote to Staging` -> `PR` -> `Merge to release` -> `Promote to prod`

The process starts with local development. When a feature is complete, with tests, a PR can be opened to master. The PR will have a set of tests run against it and needs to be reviewed and approved before being merged. Upon merge, the code will be packaged and an artifact can be stored for deployment. That artifact is deployed to a staging environment and tested there. When code is ready to move from staging to production, another PR is opened to go to the release branch. At this time more automated tests are triggered and another review should occur. Upon merge, another artifact is created and stored in a repository for deployment. Production releases can either be scheduled, or trigger automatically when updates are ready. 
