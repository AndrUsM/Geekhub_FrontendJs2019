let resoult = ''
let screen = document.querySelector('.calculator__screen')
let operation_button = document.querySelector('.calculator__button-block__item--operation')
document.body
.addEventListener('click', (e)=>{
    // e.preventDefault()
    
    if(e.target.className == 'calculator__button-block__item' || e.target.className == 'calculator__button-block__item--operation'){
        let key = e.target.value
        switch (key) {
            // Numbers
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
                resoult += key
                screen.value += key
                break;
            case 'shilft-left':
                screen.value = screen.value.split('').splice(0, screen.value.length-1).join('')
                s
                break;
            case 'shift-right':
                screen.value = screen.value.split('').splice(1, screen.value.length).join('')
                break;
            case 'C':
                screen.value = ''
                resoult = ''
                break;
            // Operations
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                if(screen.value){
                    resoult += key
                    screen.value = ''
                }
                else return;
                break;
            case '=':
                screen.value = eval(resoult)
                break;
            default:
                break;
        }
    }
    else return

    // Remove 0 in start line on integer numbers
    let start_with_null_regex = /^0[1-9]/g
    if(start_with_null_regex.exec(screen.value)){
        screen.value = screen.value.split('').slice(1, screen.value.length).join('')
    }
})

screen.addEventListener('dblclick', (e) => {
    copyToClickBoard(screen)
})
screen.addEventListener('long-press', (e) => {
    copyToClickBoard(screen)
})

function copyToClickBoard(area){
    area.select();
    area.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert(`${area.value} copied`);
}

