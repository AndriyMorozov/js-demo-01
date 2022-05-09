let img = document.querySelector('img');
img.addEventListener('dragstart', function(event) {
    event.preventDefault();
})

let chessElement = document.querySelector('.chess');
for(let i = 0; i < chessElement.rows.length; i++)
    for(let j = 0; j < chessElement.rows[i].cells.length; j++)
    {
        let r = Math.round(Math.random()*255);
        let g = Math.round(Math.random()*255);
        let b = Math.round(Math.random()*255);
        chessElement.rows[i].cells[j].style.backgroundColor =
            `rgb(${r} ${g} ${b})`;
    }


chessElement.addEventListener('click', function (event) {
    let element = event.target;
    let color = getComputedStyle(element).backgroundColor;
    document.getElementById('color').style.backgroundColor = color;
    if (element.tagName !== 'TD')
        return;
    let textInTag = element.innerHTML;
    let numberInTag = parseInt(textInTag);
    if (isNaN(numberInTag))
        numberInTag = 0;
    numberInTag++;
    element.innerHTML = numberInTag;
    element.classList.toggle('selected');
});