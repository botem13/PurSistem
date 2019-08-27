'use strict';

module.exports = function(Customer) {

    // remote method firstname
    Customer.remoteMethod(
        'getFirstName',
        {
            description: 'get firstname like -> Mahpudin',
            accepts: [
                { arg: 'firstname', type: 'string' }
            ],
            returns: {
                arg: 'res', type: 'object', root: true
            },
            http: { path: '/getFirstname', verb: 'get' }
        }
    );

    Customer.getFirstname = function (firstname, callback) {
        new Promise(function (resolve, reject) {
            var filter = {
                where: {
                    firstname: {
                        like: firstname
                    }
                }
            }
            Customer.find(filter, function (err, result) {
                if (err) reject(err)
                if (result === null) {
                    err = new Error("firstname Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject(err)
                }
                resolve(result)
            })
        }).then(function (res) {
            if (!res) callback(err)
            return callback(null, res)
        }).catch(function (err) {
            callback(err);
        })
    }

// Penutup firstname

//remote method lastname

    Customer.remoteMethod (
        'getLastname',
        {
            description: 'get lastname like -> Mahpudin',
            accepts: [
                { arg: 'lastname', type: 'string' }
            ],
            returns: {
                arg: 'res', type: 'object', root: true
            },
            http: { path: '/getLastname', verb: 'get' }
        }
    );

    Customer.getLastname = function (lastname, callback) {
        new Promise(function (resolve, reject) {
            var filter = {
                where: {
                    lastname: {
                        like: lastname
                    }
                }
            }
            Customer.find(filter, function (err, result) {
                if (err) reject(err)
                if (result === null) {
                    err = new Error("lastname Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject(err)
                }
                resolve(result)
            })
        }).then(function (res) {
            if (!res) callback(err)
            return callback(null, res)
        }).catch(function (err) {
            callback(err);
        })
    }
// penutup

//remote method email

Customer.remoteMethod(
    'getEmail',
    {
        description: 'get first_name like -> Mahpudin',
        accepts: [
            { arg: 'email', type: 'string' }
        ],
        returns: {
            arg: 'res', type: 'object', root: true
        },
        http: { path: '/getEmail', verb: 'get' }
    }
);

Customer.getEmail = function (email, callback) {
    new Promise(function (resolve, reject) {
        var filter = {
            where: {
                email: {
                    like: email
                }
            }
        }
        Customer.find(filter, function (err, result) {
            if (err) reject(err)
            if (result === null) {
                err = new Error("firstname Tidak Dapat Ditemukan")
                err.statusCode = 404
                reject(err)
            }
            resolve(result)
        })
    }).then(function (res) {
        if (!res) callback(err)
        return callback(null, res)
    }).catch(function (err) {
        callback(err);
    })
}
// penutup

// remote method address

Customer.remoteMethod(
    'getAddress',
    {
        description: 'get first_name like -> Mahpudin',
        accepts: [
            { arg: 'address', type: 'string' }
        ],
        returns: {
            arg: 'res', type: 'object', root: true
        },
        http: { path: '/getAddress', verb: 'get' }
    }
)

Customer.getAddress = function (address, callback) {
    new Promise(function (resolve, reject) {
        var filter = {
            where: {
                address: {
                    like: address
                }
            }
        }
        Customer.find(filter, function (err, result) {
            if (err) reject(err)
            if (result === null) {
                err = new Error("firstname Tidak Dapat Ditemukan")
                err.statusCode = 404
                reject(err)
            }
            resolve(result)
        })
    }).then(function (res) {
        if (!res) callback(err)
        return callback(null, res)
    }).catch(function (err) {
        callback(err);
    })
}
//penutup

// remote method phone
Customer.remoteMethod(
    'getPhone',
    {
        description: 'get first_name like -> Mahpudin',
        accepts: [
            { arg: 'phone', type: 'string' }
        ],
        returns: {
            arg: 'res', type: 'object', root: true
        },
        http: { path: '/getPhone', verb: 'get' }
    }
);

Customer.getPhone = function (phone, callback) {
    new Promise(function (resolve, reject) {
        var filter = {
            where: {
                phone: {
                    like: phone
                }
            }
        }
        Customer.find(filter, function (err, result) {
            if (err) reject(err)
            if (result === null) {
                err = new Error("firstname Tidak Dapat Ditemukan")
                err.statusCode = 404
                reject(err)
            }
            resolve(result)
        })
    }).then(function (res) {
        if (!res) callback(err)
        return callback(null, res)
    }).catch(function (err) {
        callback(err);
    })
}
//penutup

//remote method gender
Customer.remoteMethod(
    'getGender',
    {
        description: 'get first_name like -> Mahpudin',
        accepts: [
            { arg: 'gender', type: 'string' }
        ],
        returns: {
            arg: 'res', type: 'object', root: true
        },
        http: { path: '/getGender', verb: 'get' }
    }
);

Customer.getGender = function (gender, callback) {
    new Promise(function (resolve, reject) {
        var filter = {
            where: {
                gender: {
                    like: gender
                }
            }
        }
        Customer.find(filter, function (err, result) {
            if (err) reject(err)
            if (result === null) {
                err = new Error("firstname Tidak Dapat Ditemukan")
                err.statusCode = 404
                reject(err)
            }
            resolve(result)
        })
    }).then(function (res) {
        if (!res) callback(err)
        return callback(null, res)
    }).catch(function (err) {
        callback(err);
    })
}
}