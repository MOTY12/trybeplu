const express = require(`express`)
const router = express()
const Users = require('../model/users')


router.get('/register', async(req, res) => {
    const userlist = await Users.find()
    res.json(userlist)
    if (!userlist) {
        res.status(500).json({
            success: false,
            message: "no classes"
        })
    }
})

//insert new user
router.post('/register', async(req, res) => {
    const user = new Users({
        email: req.body.email,
        category: req.body.category
    })
    userssave = await user.save()

    if (!userssave)
        return res.status(404).send('users cannot be created')

    res.send(userssave)

})

module.exports = router