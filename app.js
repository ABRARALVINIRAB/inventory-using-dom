console.log('connect');
function updateName() {
    const name = document.getElementById('name_input').value;
    console.log(name);
    document.getElementById('user-name').innerText = `Hello,Dear ${name} sir`;
    document.getElementById('user-name').style.color = 'green';
}

const submitButton = document.getElementById('submit_button');

submitButton.addEventListener('click', () => {
    const itemName = document.getElementById('item_text').value;
    const itemPrice = document.getElementById('item_price').value;
    console.log(itemName, itemPrice);
    let tableRow = document.createElement('tr');
    tableRow.innerHTML = `  <tr>

    <td>${itemName}</td>
    <td class='price'>${itemPrice}</td>
    <td><button onClick='deleteRow(event)' class="btn btn-danger">Delete</button></td>
</tr>`
    document.getElementById('table-body').appendChild(tableRow);
    calculateCost();
})

function calculateCost() {
    let allCost = document.getElementsByClassName('price');
    console.log(allCost);
    let cost = 0;
    for (let index = 0; index < allCost.length; index++) {
        const element = allCost[index];
        console.log(element);
        cost = cost + parseInt(element.innerText);

    }
    console.log(cost);
    document.getElementById('total-cost').innerText = `Total cost: ${cost}`;
}
function deleteRow(event) {
    console.log('click dlt');
    event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
    calculateCost();
}