/*
in this project there will be a todo list where we can initiate
the todo list, add or delete items off of the list, review the list
or quit the program
*/

let initial = prompt("What would you like to do?");
const items = [];

while (initial !== 'quit' && initial !== 'q') {
    initial = prompt("What would you like to do?");
    if (initial === 'list') {
        console.log("***************");
        for (let i = 0; i < items.length; i++) {
            // items += 1;
            console.log(`${i}: ${items[i]}`);
        }
        console.log("***************");
    } else if (initial === 'new') {
        const newItem = prompt("Okay! What would you like to add to the list?");
        items.push(newItem);
        alert(`${newItem} has been added`);
    } else if (initial === 'delete') {
        const deleteItem = prompt("Okay! What is the index of the item you want to delete?");
        console.log(items);
        items.splice(deleteItem, 1);
        // let items = deleteItem;
        alert(`${deleteItem} has been deleted`);
    }
}
alert("Okay, you've quit the app. Goodbye!");
