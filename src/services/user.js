class user {
    constructor() {
        this.isAuthenticated = false        
    }

    verifyCredentials(username, password, cb) {
        // call API 
        console.log('Called user service', username, password)
        this.isAuthenticated = true        
        cb(this.isAuthenticated)
    }
}

export default new user()