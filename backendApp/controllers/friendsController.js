const friends = require('../models/friends')


const getFriends = (res) => { 
    // console.log('test')
    res.status(200); 
    // res.send('test')
    res.json(friends); 
   
}
const getFriend = (id, res) => {    // grabing a friend from friend's list if id has a match that friend exist
    let matchingFriend = friends.find(friend => friend.id == id) 

    if (matchingFriend) {   // if match a success 
        res.status(200);
        res.json(matchingFriend)    //return a json
    } else {
        res.status(404); // if error ...
        res.json({error: "Friend with id "+id+" not found"})
    }
}

const createFriend = (newFriend, res) => {

    friends.push(newFriend) // making and pushing new friend 
    res.status(200);
    res.json(newFriend)    
}



module.exports = {
    getFriends, getFriend,  createFriend, 
}