const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const { User } = require('../models')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
// set up Passport strategy

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.JWT_SECRET

passport.use(
  new JwtStrategy(opts, async function (jwtPayload, done) {
    try {
      const foundUser = await User.findByPk(jwtPayload.id) // 依照需求加入關聯
      if (foundUser) {
        return done(null, foundUser) // 之後 middleware 可使用 req.user 來獲取 foundUser
      } else {
        return done(null, false)
      }
    } catch (e) {
      return done(e, false)
    }
  })
)

module.exports = passport
