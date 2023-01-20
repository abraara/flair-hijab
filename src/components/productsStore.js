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
    },
    {
        id: "price_1MSDXHBtzMyB8huH1BqjuKOy",
        title: "Maissori Duppattay",
        price: 29.99,
        image: "/products/maissori-duppattay.jpg"
    },
    {
        id: "price_1MSDWyBtzMyB8huHircus9P7",
        title: "Khadi Net Duppatay",
        price: 39.99,
        image: "/products/khadi-net-duppattay.jpg"
    },
    {
        id: "price_1MSDWjBtzMyB8huHqm08twi5",
        title: "Foil Work Duppatay",
        price: 19.99,
        image: "/products/foil-work-duppattay.jpg"
    },
    {
        id: "price_1MSDWRBtzMyB8huHUKKEgQAc",
        title: "Chiffon Embroidered Duppatay",
        price: 19.99,
        image: "/products/chiffon-embroidered-duppatay.jpg"
    },
    {
        id: "price_1MSDW7BtzMyB8huHAIaL5SYZ",
        title: "pakistani jewelry",
        price: 29.99,
        image: "/products/jewelry.jpg"
    },
    {
        id: "price_1MSDVtBtzMyB8huHcBjdVRfq",
        title: "indian jewelry",
        price: 29.99,
        image: "/products/jewelry.jpg"
    },
    {
        id: "price_1MSDUfBtzMyB8huHqB2Oz3H9",
        title: "navrathan jewelry",
        price: 29.99,
        image: "/products/navrathan-jewelry.jpg"
    },
    {
        id: "price_1MSDSJBtzMyB8huH41jfn7aU",
        title: "Shimmer Hijabs",
        price: 29.99,
        image: "/products/shimmer-hijab.jpg"
    },
    {
        id: "price_1MSDRoBtzMyB8huHfpXrXEc7",
        title: "Double Stretch Jersey Hijabs",
        price: 29.99,
        image: "/products/double-stretch-jersey-hijab.jpg"
    },
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