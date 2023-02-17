
import {Fragment} from "react";
import Header from "./Component/Layout/Header";
import Body from "./Component/Layout/Body";
import Footer from "./Component/Layout/Footer";
//import Items from "./Items";
//import { productsArr } from "./ProductData/Data";

function App() {
return (
<Fragment>
  <Header />
  <Body />
  {/* <Items products={productsArr} /> */}
  <Footer />
</Fragment>
  );
}
export default App;