const myObj = {
    name: "test1",
    id: 1,
    counter: -5,
    complete: true,
    error: false,
    items: [
        {
            id: 1,
            name: "item 1"
        },
        {
            id: 2,
            name: "item 2"
        }
    ],
    address: {
        number: 1,
        street: "the street",
        postcode: "AA1 1AA"
    },
    emptyList: [],
    emptyObj: {}
};


console.log(require("../structureToString")(myObj));