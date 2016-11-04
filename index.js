function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n
  }
}

function deepestChild() {
  const grandNode = document.querySelector('#grand-node')
  var current = grandNode
  while (current.children[0]) {
    current = current.children[0]
  }
    return current
}


// function sayName(name){
//   return function hi(){
//     alert(`Hi, ${name}`)
//   }
// }
//
// function greet(greeting){
//   return function sayName(name){
//     return function hi()
//   }
// }
