
function useColor(){
    const pickColor = document.getElementById('pick-color');
    const hexCode = document.getElementById('hexcode');
    const appContainer = document.querySelector('.container');
    appContainer.style.backgroundColor = pickColor.value;
    hexCode.value = pickColor.value;
}

document.getElementById('pick-color').addEventListener('input',useColor);