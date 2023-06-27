let catalog = [
    {
        "title": 'tacos',
        "category": 'food',
        "price": 12.99,
        "image": "tacos.jpeg",
        "id": '1'
    },
    {
        "title": 'sandwich',
        "category": 'food',
        "price": 12.99,
        "image": "sandwich.webp",
        "id": '2'
    },
    {
        "title": 'salmon',
        "category": 'food',
        "price": 12.99,
        "image": "salmon.jpeg",
        "id": '3'
    },
    {
        "title": 'oxtail',
        "category": 'food',
        "price": 12.99,
        "image": "oxtail.jpeg",
        "id": '4'
    },
    {
        "title": 'fried chicken',
        "category": 'food',
        "price": 12.99,
        "image": "fried chicken.jpg",
        "id": '5'
    },
    {
        "title": 'fried catfish',
        "category": 'food',
        "price": 12.99,
        "image": "fried catfish.jpeg",
        "id": '6'
    },
    {
        "title": 'burgers',
        "category": 'food',
        "price": 12.99,
        "image": "burgers.jpeg",
        "id": '7'
    }

];

class DataService{
    getProducts ()
    {
        return catalog;
    }

}

export default DataService;
//dictionary - many object literal 