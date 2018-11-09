const expect = require('expect');
const {mongoose} = require('../db/mongoose');
const {ObjectID} = require('mongodb');
const User = require('./user');

describe('Basic db calls with User', () => {

  var userOneId = new ObjectID();
  var userTwoId = new ObjectID();
  const users = [{
    _id: userOneId,
    name: 'Jim',
    age: 22
  }, {
    _id: userTwoId,
    name: 'Patty',
    age: 33
  }];

  beforeEach((done) => {
    User.deleteMany({}).then(() => {
      return User.insertMany(users);
    }).then(() => done());
  });

  it('should create user', async () => {
    var id = new ObjectID();
    var userToSave = new User({
      _id: id,
      name: 'Fred',
      age: 44
    });

    await userToSave.save().then((doc) => {
    }).catch((e) => done(e));

    User.findById(id).then((user) => {
      expect(user.name).toBe('Fred');
    }).catch((e) => done(e));
  });

  it('should update user', async () => {
    await User.findByIdAndUpdate(userTwoId, {name: 'Patricia'}).then((doc) => {
    }).catch((e) => done(e));

    User.findById(userTwoId).then((user) => {
      expect(user.name).toBe('Patricia');
    }).catch((e) => done(e));
  });

  it('should delete user', async () => {
    await User.findByIdAndDelete(userOneId).then((doc) => {
    }).catch((e) => done(e));

    User.findById(userOneId).then((user) => {
      expect(user).toBeFalsy();
    }).catch((e) => done(e));
  });

  it('should find user', async () => {
    await User.findById(userTwoId).then((user) => {
      expect(user.name).toBe('Patty');
    }).catch((e) => done(e));
  });

  it('should find all users', async () => {
    await User.find().then((users) => {
      expect(users.length).toBe(2);
    });//.catch((e) => done(e));
  });
});
