import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = []

router.get('/', (req,res) => {
    console.log(users);
    res.send(users);
})

router.post('/', (req,res) => {
    const user = req.body;
    // const userId = uuidv4();
    // const userWithId = {...user, id: uuidv4()}

    users.push({...user, id: uuidv4()});
    res.send(`user <<${user.name}>> added`);

})

router.get('/:id', (req, res) => {
    // console.log(req.params.id);
    // const id = req.params.id;
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser);
})

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    users = users.filter((user)=> user.id !== id);
        res.send(`user with id: ${id} deleted`);
})

export default router;