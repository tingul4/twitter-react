const { User } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { signupValidation, loginValidation } = require('../helpers/validation-helper')

const authController = {
  signup: async (req, res, next) => {
    const { error } = signupValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    const { account, name, email, password, checkPassword } = req.body

    if (password !== checkPassword) return res.status(400).send('密碼不相符！')

    const emailExist = await User.findOne({ where: { email } })
    const accountExist = await User.findOne({ where: { account } })
    if (emailExist) return res.status(400).send('該Email已被使用！')
    if (accountExist) return res.status(400).send('該帳號名稱已被使用！')

    try {
      const savedUser = await User.create({
        account,
        name,
        email,
        password: await bcrypt.hash(req.body.password, 10)
      })
      return res.send({
        msg: '使用者成功儲存！',
        savedUser
      })
    } catch (err) {
      return res.status(500).send('無法創建使用者！')
    }
  },
  login: async (req, res, next) => {
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const { account, password } = req.body
    const foundUser = await User.findOne({ where: { account } })
    if (!foundUser) return res.status(400).send('無此使用者！')

    const isMatch = await bcrypt.compare(password, foundUser.password)
    if (isMatch) {
      const userData = foundUser.toJSON()
      delete userData.password // 刪除敏感資料
      const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '30d' })
      return res.send({
        message: '成功登入！',
        token: token,
        user: foundUser
      })
    } else {
      return res.status(401).send('密碼錯誤！')
    }
  },
  testToken: (req, res, next) => {
    return res.status(200).send()
  }
}

module.exports = authController
