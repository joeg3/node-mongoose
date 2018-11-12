# node-mongoose - experimenting with ways to invoke Node database code with mongoose

### Setup
* `$ sudo service mongodb status` Check if mongodb service is running
* `$ sudo service mongodb stop` Stop mongodb service
* `$ mongod --dbpath ~/tmp/mongo-data` Run mongodb locally, specifying a directory to store the database

npm test // Run all tests
npm run test-watch // Run tests with nodemon - all tests are run after any change is saved.


# Run mongodb locally
$ sudo service mongodb status
$ sudo service mongodb stop
then
$ mongod --dbpath ~/tmp/mongo-data
