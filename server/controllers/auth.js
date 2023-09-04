const User = require('../models/User')

exports.newUser = (req, res) => {
    console.log(req.body)
    User.create(req.body, (error, user) => {
        if(error){
            console.error('ERROR: ', error)
            return res.satus(500).json({message: 'Internal server error'})
        }
    })
    
    return res.status(201).json({message: 'User created successfully'}, user)
}

exports.login = (req, res) => {
    console.log(req.body)
}