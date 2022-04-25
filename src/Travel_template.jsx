import React from "react";
import { Public } from "@material-ui/icons";
import travel_card_one from './assets/travel_card_one.jpg';
import travel_card_two from './assets/travel_card_two.jpg';
import travel_card_three from './assets/travel_card_three.jpg';
import travel_card_four from './assets/travel_card_four.jpg';
import travel_card_five from './assets/travel_card_five.jpg';
import travel_card_six from './assets/travel_card_six.jpg';
import travel_card_seven from './assets/tavel_card_seven.jpg';
import travel_card_eight from './assets/travel_card_eight.jpg';
import travel_card_nine from './assets/travel_card_niine.jpg';
function Travel_card(props) {
    var src;
    if (props.card == "1") {
        src = travel_card_one;
    }
    else if (props.card == "2") {
        src = travel_card_two;
    }

    else if (props.card == "3") {
        src = travel_card_three;
    }

    else if (props.card == "4") {
        src = travel_card_four;
    }

    else if (props.card == "5") {
        src = travel_card_five;
    }

    else if (props.card == "6") {
        src = travel_card_six;
    }
    else if (props.card == "7") {
        src = travel_card_seven;
    }

    else if (props.card == "8") {
        src = travel_card_eight;
    }
    else if (props.card == "9") {
        src = travel_card_nine;
    }
    return (
        <>
            <div id="travel_card" className="relative flex flex-col overflow-hidden" style={{ 'width': '30%', 'border': '1px solid rgba(216, 25, 94, 0.1)', 'borderRadius': '10px', 'height': '550px' }}>
                <div className="absolute top-0 right-0 w-10/12 h-60" style={{ 'backgroundColor': 'rgba(216, 25, 94, 0.1)' }}>
                    <div className="flex items-center mt-4">
                        <hr className="w-24 mx-2" style={{ 'backgroundColor': '#666', 'height': '3px' }} />
                        <h1 className="text-xs  font-semibold" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'color': "#666", }}>
                            $ 1299 USD Onwards
                        </h1>
                    </div>
                </div>
                <div className="absolute top-12 right-9 h-max pl-4">

                    <img src={src} className="border-8 border-white" alt="" />
                    <div className="pl-3">
                        <h1 className="text-2xl font-semibold mt-4" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'color': "#333", }}>
                            North America
                        </h1>
                        <div className="flex items-center mt-1">
                            <h1 className="text-sm" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'color': "#d8195e", }}>
                                Upcoming Trips
                            </h1>
                            <hr className="w-20 mx-5" style={{ 'backgroundColor': '#666', 'height': '3px' }} />
                            <div className="rounded-full w-6 h-6 p-1 flex justify-center items-center" style={{ 'backgroundColor': 'rgba(216, 25, 94, 0.8)' }}>
                                <h1 className="text-xs text-white" style={{ 'fontFamily': `'Montserrat', sans-serif` }}>
                                    10
                                </h1>
                            </div>
                        </div>
                        <h1 className="text-sm mt-5 text-center" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'color': '#555' }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab, autem laboriosam in earum ducimus libero quam adipisci velit.
                        </h1>
                    </div>
                </div>
                <div className="mt-auto h-14 p-0"><button id="vtd" className="relative w-full h-14 uppercase text-xs font-semibold m-0" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'letterSpacing': '2px', 'color': 'rgb(216, 25, 94)', 'border': '1px solid rgba(216, 25, 94, 0.1)' }}>View Travel Deals</button></div>

            </div>
        </>
    );
}


function Travel_template(props) {
    if (props.subheading == "TRAVEL BY ACTIVITY/INTEREST") {
        return (<div className="w-full px-5">
            <div className="flex items-center ml-5">
                <Public style={{ 'color': '#666' }} />
                <hr className="w-48 mx-2" style={{ 'backgroundColor': '#666', 'height': '3px' }} />
                <h1 className="text-sm font-bold  uppercase" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'color': "#666", 'letterSpacing': '3px' }}>
                    {props.subheading}
                </h1>
            </div>
            <h1 className="text-7xl ml-5 font-extrabold mt-5 text-black uppercase" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'wordSpacing': '6px' }}>
                {props.heading}
            </h1>
            <h1 className="font-medium mt-5 w-4/5 ml-5" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'color': "#333", 'fontSize': '18px', 'lineHeight': '25px' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero incidunt expedita sed corporis. Totam saepe beatae voluptas nostrum architecto minima laborum, ad impedit quas, asperiores.
            </h1>

            <div className="w-full flex flex-row justify-around my-10">
                <Travel_card card="7" />
                <Travel_card card="8" />
                <Travel_card card="9" />
            </div>


        </div>);
    }
    return (
        <>
            <div className="w-full px-5">
                <div className="flex items-center ml-5">
                    <Public style={{ 'color': '#666' }} />
                    <hr className="w-48 mx-2" style={{ 'backgroundColor': '#666', 'height': '3px' }} />
                    <h1 className="text-sm font-bold  uppercase" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'color': "#666", 'letterSpacing': '3px' }}>
                        {props.subheading}
                    </h1>
                </div>
                <h1 className="text-7xl ml-5 font-extrabold mt-5 text-black uppercase" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'wordSpacing': '6px' }}>
                    {props.heading}
                </h1>
                <h1 className="font-medium ml-5 mt-5 w-4/5" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'color': "#333", 'fontSize': '18px', 'lineHeight': '25px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero incidunt expedita sed corporis. Totam saepe beatae voluptas nostrum architecto minima laborum, ad impedit quas, asperiores.
                </h1>

                <div className="w-full flex flex-row justify-around my-10">
                    <Travel_card card="1" />
                    <Travel_card card="2" />
                    <Travel_card card="3" />
                </div>
                <div className="w-full flex flex-row justify-around my-10">
                    <Travel_card card="4" />
                    <Travel_card card="5" />
                    <Travel_card card="6" />
                </div>


            </div>
        </>
    );
}

export default Travel_template;