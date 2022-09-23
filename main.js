commands = ['rock', 'paper', 'scissor']
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


function roll(){
    if(choose == false){
        alert('Please Choose Input')
    } else{
        choose = false
        resultComp = commands[Math.floor(Math.random()*3)]

        console.log(resultPlayer)
        console.log(resultComp)
        DOM.comp.innerHTML = resultComp
        DOM.player.innerHTML = resultPlayer
        if(resultPlayer == 'rock'){
            if(resultComp == 'rock'){
            end = 'Tie'
            console.log('Tie')  
            hist.push('Tie')
            DOM.result.innerHTML=`${end}`
            
            }
            if(resultComp == 'paper'){
                end = 'Lose'
                console.log('Lose')  
                hist.push('Lose')
                DOM.result.innerHTML=`${end}`
           
            }
            if(resultComp == 'scissor'){
                end = 'Win'
                console.log('Win')  
                hist.push('Win')
                DOM.result.innerHTML=`${end}`
            
            }
        }
    
        else if(resultPlayer == 'paper'){
            if(resultComp == 'rock'){
                end = 'Win'
            console.log('Win')  
            hist.push('Win')
            DOM.result.innerHTML=`${end}`
                
            }
            if(resultComp == 'paper'){
                end = 'Tie'
            console.log('Tie')  
            hist.push('Tie')
            DOM.result.innerHTML=`${end}`
                
            }
            if(resultComp == 'scissor'){
                end = 'Lose'
                console.log('Lose')  
                hist.push('Lose')
                DOM.result.innerHTML=`${end}`
                
            }
        }
    
        else if(resultPlayer == 'scissor'){
            if(resultComp == 'rock'){
                end = 'Lose'
                console.log('Lose')  
                hist.push('Lose')
                DOM.result.innerHTML=`${end}`
                
            }
            if(resultComp == 'paper'){
                end = 'Win'
            console.log('Win')  
            hist.push('Win')
            DOM.result.innerHTML=`${end}`
                
            }
            if(resultComp == 'scissor'){
                end = 'Tie'
                console.log('Tie')  
                hist.push('Tie')
                DOM.result.innerHTML=`${end}`
               
            }
        }
        
    }

    



}

function history(){
    DOM.history.innerHTML = ''
    hist.forEach((el, index) => {
        DOM.history.insertAdjacentHTML('beforeend', `<div> ${index+1}, ${el}</div>`)
    })
}




DOM.play.addEventListener('click', function(){
    roll()
    history()
})
