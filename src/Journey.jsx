import React from "react";
import { KeyboardArrowDown } from "@material-ui/icons";
import arrowimage from './assets/arrow_white.svg';
import './Css/Journey.css';
import { LocationOn } from "@material-ui/icons";
import { ContactSupport } from "@material-ui/icons";
import { Payment } from "@material-ui/icons";
function Journeycard(props) {
    var src;
    if(props.card=="1")
        src=<LocationOn style={{ 'color': '#666' }} />;
    else if(props.card=="2")
        src=<ContactSupport style={{ 'color': '#666' }} />;
    else
        src=<Payment style={{ 'color': '#666' }}  />;
    return (
        <>
            <div className="bg-white rounded px-8 py-10" style={{ 'width': '30%','height':'250px' }}>
                <div className="flex items-center">
                    {src}
                    <hr className="w-16 mx-2" style={{ 'backgroundColor': 'rgba(216, 25, 94, 0.4)', 'height': '3px' }} />
                    <h1 className="uppercase" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'wordSpacing': '3px','fontSize':'13px','fontWeight':'700','color':"#111",'letterSpacing':'2px'}}>
                        {props.heading}
                    </h1>
                </div>
                <div className="my-6">
                    <h1 className="font-normal" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'color': "#222",'fontSize':'12px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero incidunt expedita sed corporis. Totam saepe beatae voluptas nostrum architecto minima laborum, ad impedit quas, asperiores.
                    </h1>
                </div>
            </div>
        </>
    );
}


function Journey() {
    return (
        <>
            <div className="w-full mt-8 relative px-0 mx-0" style={{ 'height': '700px' }} id="journey_banner">
                <div className="flex flex-col justify-center items-center py-10">
                    <h1 className="text-7xl font-extrabold mt-8 text-white uppercase" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'wordSpacing': '6px' }}>
                        the journey
                    </h1>
                    <h1 className="font-medium mt-8 w-4/5 text-center" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'color': "white", 'fontSize': '18px', 'lineHeight': '26px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero incidunt expedita sed corporis. Totam saepe beatae voluptas nostrum architecto minima laborum, ad impedit quas, asperiores.
                    </h1>

                    <div className="flex items-center mt-5 w-max" id="arrow_right">
                        <h1 className="text-xs text-white font-semibold  uppercase" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'letterSpacing': '2px' }}>
                            Read More
                        </h1>
                        <div className="ml-5" >
                            <img src={arrowimage} width="100px" alt="" />
                        </div>
                    </div>

                </div>
                <div className="flex justify-around mt-8">
                    <Journeycard card="1" heading="exotic locations" />
                    <Journeycard card="2" heading="24/7 support"/>
                    <Journeycard card="3" heading="secure payment"/>
                </div>
            </div>
        </>
    );
}

export default Journey;