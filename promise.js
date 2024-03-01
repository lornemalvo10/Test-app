// const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: "Suraj", Pass: "123"})
//         } else{
//             reject("There is some error")
//         }
//     }, 1000)
// }) 



// async function myfunc(){
//     try {
//         const data = await promise
//         console.log(data)
        
//     } catch (error) {
//         console.log(error)
//     }
// }

// myfunc()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((data) =>  {
//     return data.json()
// })
// .then((data) => console.log(data))
// .catch((message) => console.log(message))

// function func(username, pass, roll){
//     this.username = username
//     this.pass = pass
//     this.roll = roll

//     return this.console
// }

// console.log(func.prototype)

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }


// createUser.prototype.increment = function(){
//     this.score ++
// }

// createUser.prototype.printMe = function(){
//     console.log(`The score is ${this.score}`)
// }

// const suraj =  new createUser("Suraj", 100)

// // console.log(suraj.printMe())

// let myName = "Suraj    "

// String.prototype.trueLength = function(){
//     console.log(this)
//     console.log(this.length)
//     console.log(`True length is: ${this.trim().length}`)
// }

// myName.trueLength()


// class User{
//     constructor(_username, pass){
//         this._username = _username
//         this._pass = pass
//     }

//     get _username(){
//         return this.username.toUpperCase()
//     }

//     set _username(value){
//         this.username = value
//     }

    
// }

// const newUser = new User('Suraj', "mypass")

// console.log(newUser._username)


function func(){
    let username = 'name'
    function displayName(){
        console.log(username)

    }
    return displayName
}

// const myfunc = func()
// myfunc()
func()
// console.log(myfunc())
console.log(func())