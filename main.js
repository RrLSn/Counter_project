const h1El = document.getElementById('num_count')
const addEl = document.getElementById('add-button')
const lessEl = document.getElementById('less-button')

let num = 0
h1El.textContent = num

addEl.addEventListener(
    'click',
    () => {
        const addcount = h1El.textContent = ++num
        if(addcount > 0){
            h1El.style.color = 'green'
        } else if(addcount === 0){
            h1El.style.color = '#333333'
        }
    }
)

lessEl.addEventListener(
    'click',
    () => {
        const lesscount = h1El.textContent = --num
        if(lesscount < 0){
            h1El.style.color = 'red'
        } else if(lesscount === 0){
            h1El.style.color = '#333333'
        }
    }
)