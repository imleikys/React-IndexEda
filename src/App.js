import React from "react";
import Header from "./components/Header/Header";
import {Routes, Route, Navigate} from 'react-router';
import {Main} from "./pages/Main/Main";
import {Cart} from "./pages/Cart/Cart";
import {Footer} from "./components";
import DeliverySort from "./pages/DeliverySort/DeliverySort";


function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/cart" element={ <Cart  /> } />
        <Route path="/delivery" element={ <DeliverySort />}/>

        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
