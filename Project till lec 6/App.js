import React from "react";
import  ReactDOM ,{createRoot} from "react-dom";
import HeaderComponent from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";



// default and named export 

// AppLayout component to show: Header, Body, Footer
const AppLayout = () =>{
   return(
      <>
      <HeaderComponent />
      <Body />
      <Footer />
      </>
   );
}
// selected the root element 
const root = ReactDOM.createRoot(document.getElementById("root"));
// here we render this on our page 
root.render(<AppLayout />);          