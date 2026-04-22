const container = document.querySelector('.container')


function getRandomColor(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const a = 0.5

    return `rgba(${r},${g},${b},${a})` 
}

function createGrid(n){
    const size = 640/n

    for(let row = 0; row < n; row++){
        for(let column = 0; column < n; column++){
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.style.width = `${size}px`
            cell.style.height = `${size}px`
            container.append(cell)

        }
    }

    container.addEventListener('mouseover', (e) => {
        const randomColor = getRandomColor()
        if(e.target.classList.contains('cell')){
            e.target.style.backgroundColor = randomColor
        }
    })

}

createGrid(16)