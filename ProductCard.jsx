function Cart() {
    const handleAddToCart = () => {
        // Logic to add item to cart
        console.log("Item added to cart");
    };

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <h1>{Item.name}</h1>
            <p>Category: {Item.category}</p>
            <p>Price: ${Item.price.toFixed(2)}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default Cart;
