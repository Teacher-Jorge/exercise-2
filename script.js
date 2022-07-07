let btn1Am = document.getElementById('btn1Am')
let btn1Is = document.getElementById('btn1Is')
let btn1Are = document.getElementById('btn1Are')

let word1 = document.getElementById('word1')
let check1 = document.getElementById('check1')
let score = document.getElementById('score')
let value = score.innerHTML

btn1Am.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word1.textContent = 'am'
    word1.style.color = 'red'
    btn1Am.style.backgroundColor = 'red'
    btn1Am.style.color = 'yellow'
    check1.style.visibility = 'hidden'
    btn1Am.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value
})

btn1Are.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word1.textContent = 'are'
    word1.style.color = 'red'
    btn1Are.style.backgroundColor = 'darkred'
    btn1Are.style.color = 'yellow'
    check1.style.visibility = 'hidden'
    btn1Are.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value
})

btn1Is.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    word1.textContent = 'is'
    word1.style.color = 'dodgerblue'
    btn1Is.style.backgroundColor = 'lime'
    btn1Is.style.color = 'black'
    check1.style.visibility = 'visible'
    value ++
    document.getElementById('score').innerHTML = value
    btn1Is.disabled = 'true'
    btn1Am.disabled = 'true'
    btn1Are.disabled = 'true'
})