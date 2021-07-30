var d = new Date()
var hour = d.getHours()
var min = d.getMinutes()
var sec = d.getSeconds()

document.getElementById('time1').innerHTML = hour + ':' + min
var body = document.getElementById('body')
body.style.color = 'black'

// showMessage1()
// {
//   console.log('Message received')
//   body.innerHTML =
//     'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.'
// }
// showMessage2()
// {
//   body.innerHTML =
//     "Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro 'Matz' Matsumoto in Japan"
// }
// showMessage3()
// {
//   body.innerHTML =
//     'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.'
// }
function showMessage1() {
  document.getElementById('body').innerHTML =
    'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.'
}
function showMessage2() {
  document.getElementById('body').innerHTML =
    'Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.'
}
function showMessage3() {
  document.getElementById('body').innerHTML =
    'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.'
}
