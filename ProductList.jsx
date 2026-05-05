import { useState } from "react";

const Item = [
    {id:1, name: "Item 1", category:"BAKERY", price: 10},
    {id:2, name: "Item 2", category:"DAIRY", price: 15},
    {id:3, name: "Item 3", category:"FRUITS", price: 20},
    {id:4, name: "Item 4", category:"VEGETABLES", price: 25},
    {id:5, name: "Item 5", category:"SNACKS", price: 30},
]

function Shop() {
    const [category, setCategory] = useState("ALL");

    const filteredItems = category === "ALL" ? Item : Item.filter(item => item.category === category);

    return (
        <div className="shop">
            <h1>Shop</h1>
            <div className="categories">
                <button onClick={() => setCategory("ALL")}>All</button>
                <button onClick={() => setCategory("BAKERY")}>Bakery</button>
                <button onClick={() => setCategory("DAIRY")}>Dairy</button>
                <button onClick={() => setCategory("FRUITS")}>Fruits</button>
                <button onClick={() => setCategory("VEGETABLES")}>Vegetables</button>
                <button onClick={() => setCategory("SNACKS")}>Snacks</button>
            </div>
        </div>
    );
}

export default Shop;
