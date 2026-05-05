function InCart({cart}) {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Category: {item.category}</p>
                            <p>Price: ${item.price.toFixed(2)}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default InCart;