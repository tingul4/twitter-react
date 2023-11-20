const express = require('express')
const router = express.Router()
// const { authenticated } = require('../middleware/auth')
// const upload = require('../middleware/multer')
// const api = require('./modules/api')
const auth = require('./modules/auth')

// const tweetController = require('../controllers/tweet-controller')
// const userController = require('../controllers/user-controller')
// const replyController = require('../controllers/reply-controller')

// router.use('/api/auth', api)
router.use('/api/auth', auth)

// router.get('/users/:id/edit', authenticated, userController.getEditPage)
// router.post('/users/:id/edit', authenticated, upload.fields([{ name: 'avatar' }, { name: 'cover' }]), userController.editUser)
// router.get('/users/:userId/tweets', authenticated, userController.getUserTweetsPage)
// router.get('/users/:userId/likes', authenticated, userController.getUserLikesPage)
// router.get('/users/:userId/replies', authenticated, userController.getUserRepliesPage)
// router.get('/users/:userId/followings', authenticated, userController.getUserFollowingsPage)
// router.get('/users/:userId/followers', authenticated, userController.getUserFollowersPage)

// router.get('/tweets/:tweetId/replies', authenticated, replyController.getTweetReplies)
// router.post('/tweets/:tweetId/replies', authenticated, replyController.postReply)
// router.post('/tweets/:tweetId/like', authenticated, tweetController.addLike)
// router.post('/tweets/:tweetId/unlike', authenticated, tweetController.removeLike)
// router.get('/tweets', authenticated, tweetController.getTweets)
// router.post('/tweets', authenticated, tweetController.postTweets)

// router.post('/followships', authenticated, userController.followingApi)
// router.post('/followships/:id', authenticated, userController.addFollowing)
// router.delete('/followships/:id', authenticated, userController.removeFollowing)

// router.get('/', (req, res) => res.redirect('/tweets'))
// router.use((req, res) => { res.status(404).render('404') })

module.exports = router
