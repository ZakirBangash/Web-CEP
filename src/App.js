import React from "react";
import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import SigninScreen from "./components/SignIn/SigninScreen";
import RegisterScreen from "./components/Register/RegisterScreen";
import ShippingAddressScreen from "./components/Shipping/ShippingScreen";
import PaymentMethodScreen from "./components/PaymentMethod/PaymentMethodScreen";
import PlaceOrderScreen from "./components/Order/PlaceOrder";
import GatewayStripe from "./components/GatewayStripe";
import NotFound from "./NotFound";
import Search from './components/Search/Search'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"
          element={
            <div className="app">
              <SideNav />
              <Home />
            </div>
          }
        />
        <Route path="checkout"
          element={
            <>
              <SideNav />
              <div className="h1">
                <Cart />
              </div>
            </>
          }
        />

        <Route path="signin"
          element={
            <>
              <SideNav />
              <div className="h1">
                <SigninScreen />
              </div>
            </>
          }
        />
        <Route path="register"
          element={
            <>
              <SideNav />
              <div className="h1">
                <RegisterScreen />
              </div>
            </>
          }
        />
        <Route path="shipping"
          element={
            <>
              <SideNav />
              <div className="h1">
                <ShippingAddressScreen />
              </div>
            </>
          }
        />
        <Route path="payment"
          element={
            <>
              <SideNav />
              <div className="h1">
                <PaymentMethodScreen />
              </div>
            </>
          }
        />
        <Route path="placeOrder"
          element={
            <>
              <SideNav />
              <div className="h1">
                <PlaceOrderScreen />
              </div>
            </>
          }
        />
        <Route path="stripe"
          element={
            <>
              <div className="h1">
                <GatewayStripe />
              </div>
            </>
          }
        />

        <Route path="search"
          element={
            <>
              <SideNav />
              <div className="searchcom">
                <Search />
              </div>
            </>
          }
        />

        <Route path="*"
          element={
            <>
              <div className="h1">
                <NotFound />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
