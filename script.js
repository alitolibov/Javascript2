let arr_cars = [
    {
        model: 'spark',
        price: 8000
},
{
    model: 'nexia',
    price: 10000
},
{
    model: 'cobalt',
    price: 11000
},
{
    model: 'gentra',
    price: 14000
},
{
    model: 'malibu',
    price: 35000
},
{
    model: 'equinox',
    price: 36000
},
{
    model: 'treverse',
    price: 55000
},
{
    model: 'tahoe',
    price: 75000
}
]

arr_cars.filter(item => {
    if (item.price <=35000) console.log(item);
})