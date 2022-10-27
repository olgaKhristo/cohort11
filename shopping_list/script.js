
    const list = document.querySelector('ul');
    const input = document.querySelector('input');
    const button = document.querySelector('button');
/**for button yes!*/
    button.onclick = function() {
        let newItem = input.value;
    input.value = '';
    let itemList = document.createElement('li');
    let itemText = document.createElement('span');
    let itemButton = document.createElement('button');

    itemList.appendChild(itemText);
    itemText.textContent = newItem;
    itemList.appendChild(itemButton);
    itemButton.textContent = 'X';

    list.appendChild(itemList);

    itemButton.onclick = function() {
        list.removeChild(itemList);
    input.focus();

            }
        }

// select img element
const img = document.getElementById('images')
let toggle = true;
img.addEventListener('click', function() {
    toggle = !toggle;
    if(toggle){
        img.src = 'img//food.jpeg';
    }else{
        img.src = 'img//party.jpeg'
    }
   
}
)
// for enter key
input.addEventListener('keydown', (event) => {
    if(e.key === 13) {
        console.log(itemList)
    }

})