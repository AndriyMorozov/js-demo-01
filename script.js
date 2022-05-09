let chessElement = document.querySelector('.chess');
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