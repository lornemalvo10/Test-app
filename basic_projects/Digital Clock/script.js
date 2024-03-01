const clock = document.getElementById('clock')

// console.log(clock)

const date = new Date()
console.log(date)

setInterval(function(){
    const date = new Date()
    // console.log(date)
    clock.innerHTML = date.toLocaleTimeString()

}, 1000)