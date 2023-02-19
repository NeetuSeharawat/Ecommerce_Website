import Header from "./Component/Layout/Header";
import Body from "./Component/Layout/Body";
import Footer from "./Component/Layout/Footer";
import CartProvider from "./Component/Store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <Body />
      <Footer />
    </CartProvider>
  );
};
export default App;