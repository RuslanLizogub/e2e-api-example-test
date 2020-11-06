const userHelper = require('../helpers/userHelper');
const agent = require('../helpers/superagentHelper');
const userData = require('../test_data/userData');
const expect = require('chai').expect;

const user = userData.getUser();
const updateUser = userData.getUser({ name: "morpheus updated"});
let userId;

describe('User CRUD', function() {
    it('Create user', async function() {
        let res = await userHelper.createNewUser(agent, user);
        userId = res.body.id;
        expect(res.statusCode).to.equal(201);
        expect(res.body.name).to.equal(user.name);
    });

    it('Update user', async function() {
        let res = await userHelper.updateUser(agent, updateUser, userId);
        expect(res.statusCode).to.equal(200);
        expect(res.body.name).to.equal(updateUser.name);
    });

    //TODO working with default parameters
    it('Read user', async function() {
        let res = await userHelper.readUser(agent, 2);

        expect(res.statusCode).to.equal(200);
        expect(res.body.data['first_name']).to.equal("Janet");
    });

    it('Delete user', async function() {
        let res = await userHelper.deleteUser(agent, userId);

        expect(res.statusCode).to.equal(204);
    });

    it('Read user', async function() {
        let res = await userHelper.readUser(agent, userId);

        expect(res.status).to.equal(404);
    });
});
