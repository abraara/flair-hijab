const productsArray = [
    {
        id: "price_1MQQCdBtzMyB8huH7A82IDl3",
        title: "Rippled Cotton Hijabs",
        price: 29.99,
        image: "/products/rippled-cotton-hijab.jpg"
    },
    {
        id: "price_1MQQBWBtzMyB8huH38Qi7GDt",
        title: "Hijab Accessories",
        price: 39.99,
        image: "/products/hijabs.jpg"
    },
    {
        id: "price_1MQQAsBtzMyB8huHu5QSWSaw",
        title: "Kurta Men",
        price: 89.99,
        image: "/mens.jpg"
    }
];

function getProductData(id) {
    const productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };