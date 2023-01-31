const myArr = [
    {
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
    },
    {
        name: "test2",
        id: 2,
        counter: -5,
        complete: true,
        error: false,
    },
    {
        name: "test3",
        id: 3,
        counter: -5,
        complete: true,
        error: false,
    }
];


console.log(require("../structureToString")(myArr));