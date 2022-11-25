import { makeAutoObservable } from "mobx"

class Users {
    users = []
    currentUser = {}

    constructor () {
        makeAutoObservable(this)
    }

    setSelectedUser (newUser) {
        const oldUser = this.currentUser;
        const foundUser = this.users.find(user => JSON.stringify(user) === JSON.stringify(oldUser));
        
        if (foundUser === -1) {
            console.log("User not found");
        }

        foundUser.username = newUser.username;
        foundUser.age = newUser.age;
        foundUser.rank = newUser.rank;
        foundUser.position = newUser.position;
        foundUser.status = newUser.status;
        this.currentUser = foundUser;
    }
}

export default new Users ();