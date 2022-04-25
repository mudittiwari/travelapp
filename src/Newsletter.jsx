import React from "react";
import './Css/newsletter.css';
import { LocalOffer } from "@material-ui/icons";
import { KeyboardArrowDown } from "@material-ui/icons";
function Newsletter_banner() {
    return (
        <>
            <div className="w-full mt-8 relative px-0 mx-0" style={{ 'height': '500px' }} id="newsletter_banner">
                <div className="flex flex-col justify-center items-center py-10">
                    <h1 className="text-7xl font-extrabold mt-8 text-white uppercase" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'wordSpacing': '6px' }}>
                        GET 15% OFF
                    </h1>
                    <h1 className="font-medium mt-8 w-4/5 text-center" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'color': "white", 'fontSize': '18px', 'lineHeight': '26px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero incidunt expedita sed corporis. Totam saepe beatae voluptas nostrum architecto minima laborum, ad impedit quas, asperiores.
                    </h1>
                    <div id="inputemail" className="flex mt-8">
                        <input className="rounded-l" type="email" placeholder="Enter your Email address" />
                        <button id="offbutton" className=" rounded-r text-white text-xs font-semibold uppercase py-4 px-4" >GET 15% off</button>
                    </div>
                    <div id="arrow" className="flex justify-center items-center mt-40 cursor-pointer">
                        <KeyboardArrowDown className="text-white" fontSize="large" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Newsletter_banner;