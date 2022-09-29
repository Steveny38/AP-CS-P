let resultPlayer = ''
let choose = false
end = ''
DOM = {
    'play': document.getElementById('play'),
    'result': document.getElementById('result'),
    'player': document.getElementById('playerResult'),
    'comp': document.getElementById('compResult'),
    'history': document.getElementById('history'),
    'rock': document.getElementById('rock'),
    'paper': document.getElementById('paper'),
    'scissor': document.getElementById('scissors')
}

let hist = []

function allButtons(name){
    choose = true
    DOM.player.innerHTML = `${name}`
    DOM.comp.innerHTML = ""
    DOM.result.innerHTML = ''
}

function r(){
    resultPlayer = 'rock'
    allButtons('rock')
}
function p(){
    allButtons('paper')
    resultPlayer = 'paper'
}
function s(){
    allButtons('scissor')
    resultPlayer = 'scissor'
}

DOM.rock.addEventListener('click', r)
DOM.paper.addEventListener('click', p)
DOM.scissor.addEventListener('click', s)


function play(playerResult){
    if(choose == false){
        alert('Please Choose Input')
    } else{
        commands = ['rock', 'paper', 'scissor']
        choose = false
        computerResult = commands[Math.floor(Math.random()*3)]
        DOM.comp.innerHTML = computerResult
        if(playerResult == "rock"){
            if(computerResult == "rock"){
                hist.push('Tie')
                DOM.result.innerHTML = 'Tie'
            }
            if(computerResult == "paper"){
                hist.push('Lose')
                DOM.result.innerHTML = 'Lose'
            }
            if(computerResult == "scissor"){
                hist.push('Win')
                DOM.result.innerHTML = 'Win'
            }
        }
        else if(playerResult == "paper"){
            if(computerResult == "rock"){
                hist.push('Win')
                DOM.result.innerHTML = 'Win'
            }
            if(computerResult == "paper"){
                hist.push('Tie')
                DOM.result.innerHTML = 'Tie'
            }
            if(computerResult == "scissor"){
                hist.push('Lose')
                DOM.result.innerHTML = 'Lose'
            }
        }
        else if(playerResult == "scissor"){
            if(computerResult == "rock"){
                hist.push('Lose')
                DOM.result.innerHTML = 'Lose'
            }
            if(computerResult == "paper"){
                hist.push('Win')
                DOM.result.innerHTML = 'Win'
            }
            if(computerResult == "scissor"){
                hist.push('Tie')
                DOM.result.innerHTML = 'Tie'
            }
        }

        DOM.history.innerHTML = ''
        hist.forEach((el, index) => {
            DOM.history.insertAdjacentHTML('beforeend', `<div> ${index+1}, ${el}</div>`)
        })
    }

}

// function history(historyList){
//     DOM.history.innerHTML = ''
//     historyList.forEach((el, index) => {
//         DOM.history.insertAdjacentHTML('beforeend', `<div> ${index+1}, ${el}</div>`)
//     })
// }




DOM.play.addEventListener('click', function(){
    play(resultPlayer)
})
