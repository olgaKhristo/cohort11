
    const list = document.querySelector('ul');
    const input = document.querySelector('input');
    const button = document.querySelector('button');
/**for button yes!*/
    button.onclick = function() {
        let newItem = input.value;
    input.value = '';
    let itemList = document.createElement('li');
    let itemText = document.createElement('span');
    itemList.id = 'itemList'
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
input.addEventListener('keydown', (e) => {
    console.log(e)
    let itemList = document.createElement('li');
    let item = e.target.value
    // let itemList = document.getElementById('itemList')
    console.log(itemList)
    if (itemList == null) {
        itemList.append(item)
        let itemButton = document.createElement('button');
        itemButton.textContent = 'X';
        itemList.appendChild(itemButton);      

        list.appendChild(itemList);
e.target.value = " "
        itemButton.onclick = function () {
            list.removeChild(itemList);
            input.focus();
    }}
    else if (e.key === "Enter") {
        console.log(itemList)
        itemList.append(item)
        let itemButton = document.createElement('button');
        itemButton.textContent = 'X';
        itemList.appendChild(itemButton);


        list.appendChild(itemList);
        e.target.value = ' '
        itemButton.onclick = function () {
            list.removeChild(itemList);
            input.focus();
    }
}

})