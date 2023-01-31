// myArr could be a complicated array/object that you'd copied from your project's codebase.
// In this script, we are going to change the shape of myArr's elements, then log out the stringified result.
// That string could then be piped into a file, and then copied back into your project in place of the original.

//We want to replace the address object in each element with a single string property
const myArr = [
    {
        id: 1,
        name: "item 1",
        address: {
            number: 1,
            street: "the street",
            postcode: "AA1 1AA"
        }
    },
    {
        id: 2,
        name: "item 2",
        address: {
            number: 2,
            street: "the street",
            postcode: "AA1 1AA"
        }
    },
    {
        id: 3,
        name: "item 3",
        address: {
            number: 3,
            street: "the street",
            postcode: "AA1 1AA"
        }
    }
];

//Make the change to the elements
const changedArr = myArr.map(item => {
    const address = item.address;
    const addressStr = `${address.number} ${address.street}, ${address.postcode}`;
    
    return { ...item, address: addressStr};
});

//Now we stringify the new array
const changeStr = require("../structureToString")(changedArr);

//Finally, we can output the result (to be pasted back into our project)
console.log(changeStr);