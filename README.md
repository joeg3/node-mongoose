# node-mongoose - Experimenting with ways to invoke Node database code

### Setup
* `$ sudo service mongodb status` Check if mongodb service is running
* `$ sudo service mongodb stop` Stop mongodb service
* `$ mongod --dbpath ~/tmp/mongo-data` Run mongodb locally, specifying a directory to store the database

### Running the code
All the code is invoked using unit tests.
* `npm test` Run all tests
* `npm run test-watch` Run tests with nodemon - all tests are run after any file change is saved.

### The code examples
* `User` - Example of invoking mongoose the typical way
* `Todo` - Example of using an api layer where you could abstract how the object is stored. Here, it's still stored using mongodb, but you could write to a file, or call another service, and the user of the code wouldn't know the difference.
* `Note` - Example where mongoose CRUD operations are invoked as usual, but you could override the method to call a different service to do the operation. Note: this code is still a work in progress.
