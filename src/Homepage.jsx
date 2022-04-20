import React from "react";
import homeepage_bg from '../src/assets/homepage_bg.jpg';
import { KeyboardArrowDown } from "@material-ui/icons";
import './Css/homepage.css';
function Homepage() {
    return (
        <>
            <div className="w-full">
                <div className="w-full overflow-hidden" id="homepage_background" style={{ 'height': '800px !important' }}>
                    <img src={homeepage_bg} className='w-full' alt="" />
                    <div className="w-full h-max flex flex-col justify-center items-center" style={{ 'height': '600px' }}>
                        <h1 className="text-7xl text-white uppercase mx-auto text-center" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'wordSpacing': '6px' }}>
                            best travel experiences in India
                        </h1>
                        <h1 className="text-xl mt-14 text-white w-3/4 mx-auto text-center" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'wordSpacing': '6px' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro sapiente eius ut ipsam! Fuga laboriosam libero dignissimos odit consectetur explicabo, facere unde iusto quos assumenda nesciunt eum deleniti quam!
                        </h1>

                    </div>
                    <div id="arrow" className="flex justify-center items-center">
                        <KeyboardArrowDown className="text-white" fontSize="large" />
                    </div>
                </div>

            </div>
        </>
    );
}
export default Homepage;