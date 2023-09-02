const {
    User
} = require('../models');
const {
    signToken,
    AuthenticationError
} = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            console.log(context.user);
            if (context.user) {
                return User.findOne({
                    _id: context.user._id
                });
            }
            throw AuthenticationError;
        },

        getAllUsers: async () => {
            return User.find().select(["-password"])
        }
    },

    Mutation: {
        addUser: async (parent, {
            username,
            email,
            password
        }) => {
            console.log("ADDING USER")
            const user = await User.create({
                username,
                email,
                password
            });
            const token = signToken(user);
            return {
                token,
                user
            };
        },
        login: async (parent, {
            email,
            password
        }) => {
            const user = await User.findOne({
                email
            });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return {
                token,
                user
            };
        },
        //    need a route to update user with their new high score 
        // recent login

        updateSpellingGameHighScore: async (parent, {
            spellingGameHighScore
        }, context) => {
            if (context.user) {

                const userData =
                    await User.findOneAndUpdate({
                        _id: context.user._id
                    }, {
                        $set: {
                            spellingGameHighScore: spellingGameHighScore
                        }
                    }, {new:true});


                return userData;
            }
            throw AuthenticationError;
            ('You need to be logged in!');
        },
    },
};

module.exports = resolvers;