/* jshint -W117, -W030 */
/**
 *  Demonstrates use of bard's real $http and $q
 *  restoring the ability to make AJAX calls to the server
 *  while retaining all the goodness of ngMocks.
 *
 *  An alternative to the ngMidwayTester
 */

describe('Server: PocAuth', function() {
    var dataservice;
    var user;

    beforeEach(bard.asyncModule('fuelNow'));

    beforeEach(inject(function(PocAuth) {
        dataservice = PocAuth;
    }));

    describe('when login', function() {
        it('should login', function(done) {
            dataservice.login('atlasoil@atlasoil.com','Password1')
                .then(function(data) {
                    expect(data.status).to.be.defined;
                    expect(data.status !== 401).to.be.true;
                    user = data.data.data;
                })
                .then(done, done);
        });
        it('user should be defined', function(done) {
            expect(user).to.be.defined;
            done();
        });
        it('roles should exist', function(done) {
            expect(user.roles.length > 0).to.be.true;
            done();
        });
        it('role should not be admin', function(done) {
            var role = user.roles[0];
            expect(!(role === 'CUSTOMER_ADMIN' || role === 'SUPER_USER')).to.be.true;
            done();
        });
    });

    describe('when logout', function() {

        it('should logout', function(done) {
            dataservice.logout('atlasoil@atlasoil.com')
                .then(function(data) {
                    expect(data.headers.status === 200);
                })
                .then(done, done);
        });
    });
});

/*describe('Server: dataservice', function() {
    var dataservice;

    beforeEach(bard.asyncModule('app'));

    beforeEach(inject(function(_dataservice_) {
        dataservice = _dataservice_;
    }));

    describe('when call getCustomers', function() {

        it('should get 16 Customers', function(done) {
            dataservice.getCustomers()
                .then(function(data) {
                    expect(data).to.have.length(16);
                })
                .then(done, done);
        });

        it('should contain Black Widow', function(done) {
            dataservice.getCustomers()
                .then(function(data) {
                    var hasBlackWidow = data && data.some(function foundHer(customer) {
                        return customer.firstName.indexOf('Black') >= 0;
                    });
                    expect(hasBlackWidow).to.be.true;
                })
                .then(done, done);
        });
    });

    describe('when call getCustomer', function() {

        it('should get Black Widow', function(done) {
            dataservice.getCustomer('1017109')
                .then(function(customer) {
                    var hasBlackWidow = customer.firstName === 'Black';
                    expect(hasBlackWidow).to.be.true;
                })
                .then(done, done);
        });
    });
});*/
