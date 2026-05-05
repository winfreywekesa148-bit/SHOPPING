import Shop from "./components/ProductList";
import Card from "./components/ProductCard";
import Mode from "./assets/shop/mode";
import InCart from "./assets/shop/Components/Cart";

function App() {
    return (
        <div className="App">
            <Mode />
            <Shop />
            <Card />
            <InCart cart={[]} />
        </div>
    );
}

export default App;
