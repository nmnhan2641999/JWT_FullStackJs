const helloController = (req, res) => {
    return res.render("home.ejs")
}

const handleUserController = (req, res) => {
    return res.render("user.ejs")
}

module.exports = {
    helloController,
    handleUserController
}