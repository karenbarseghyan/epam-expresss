import express from 'express';

const router = express.Router();

const users = [
    {
        name: "Karen",
        surname: "Barseghyan",
        major: "NodeJS"
    },
    {
        name: "Leo",
        surname: "Barseghyan",
        major: "none"
    }
]

router.get('/', (req,res) => {
    console.log(users);
    res.send(users);
})

router.post('/', (req,res) => {
    console.log("req reached");
    console.log(req.body);
    const user = req.body;
    users.push(user);
    res.send(`user <<${user.name}>> added`);

})

export default router;