const passport = require('../config/passport') // 引入 passport
const authenticated = passport.authenticate('jwt', { session: false })

module.exports = {
  authenticated
}
