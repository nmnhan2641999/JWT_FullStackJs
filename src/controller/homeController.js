const helloController = (req, res) => {
    return res.render("home.ejs")
}

module.exports = {
    helloController,
}