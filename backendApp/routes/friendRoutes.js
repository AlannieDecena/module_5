const express = require('express');
const router = express.Router();
const friendsController = require('../controllers/friendsController')


//requesting all friend list
router.get('/all', (req, res) => {
    friendsController.getFriends(res); 
    
})

router.get('/:id', (req, res) => {
    console.log('test')
    // res.send('test')
    friendsController.getFriend(req.params.id, res);  
})

router.post('/new', (req, res) => {
    let newFriend = req.body;
    console.log(newFriend)
    friendsController.createFriend(newFriend, res)
})

module.exports = router;