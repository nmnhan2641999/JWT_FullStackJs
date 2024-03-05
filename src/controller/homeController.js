import userService from "../service/userService";


const helloController = (req, res) => {
    return res.render("home.ejs")
}

const handleUserController = (req, res) => {
    return res.render("user.ejs")
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    // userService.createNewUser(email, password, username);
    userService.getUserList();

    return res.send("user from handleCreateNewUser");
}

module.exports = {
    helloController,
    handleUserController,
    handleCreateNewUser
}