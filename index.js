const container = document.querySelector('.container')


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
}