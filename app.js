// window.fetch('./codes.json')
//   .then(res => res.json())
//   .then(data => {
//     const codesData = data
//     document.querySelector('#button').addEventListener('click', handleInput)
//     function handleInput () {
//       let inputValue = document.querySelector('#input').value
//       document.getElementById('target').innerHTML = codesData[inputValue] || "invalid code"
//     }
//      document.body.addEventListener('keypress', function (ev) {
//   if (ev.keyCode === 13) {
//     document.querySelector('#button').click()
//   }
//   })
//   })

const $ = s => document.querySelector(s)

let dictionary
window.fetch('words.txt')
  .then(r => r.text())
  .then(text => {
    dictionary = text.split('\n').map(line => line.split('|').slice(1))
  })

$('#input').addEventListener('input', function (e) {
  const search = e.target.value
  if (!dictionary ) $('#target').innerHTML = 'Dictionary not loaded'

  const result = dictionary.filter(line => line[0] === search)
  $('#target').innerHTML = result.map(word => `<b>${word[0]}: </b>${word[1]}`).join('<br/>')
  if(result.length === 0) $('#target').innerHTML = "The word you are looking for is not in the dictionary"
})

// document.body.addEventListener('keypress', ev => (ev.keyCode === 13) && $('#button').click())