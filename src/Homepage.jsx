import React from "react";
import homeepage_bg from '../src/assets/homepage_bg.jpg';
import { KeyboardArrowDown } from "@material-ui/icons";
import { Public } from "@material-ui/icons";
import './Css/homepage.css';
import Travel_template from "./Travel_template";
import Newsletter_banner from "./Newsletter";
import Blog_template from "./Blogsection";
import Journey from "./Journey";
function Homepage() {
    return (
        <>
            <div className="w-full">
                <div className="w-full overflow-hidden relative" id="homepage_background" >
                    <img src={homeepage_bg} className='w-full' alt="" />
                    <div className="w-full h-max flex flex-col justify-center items-center" style={{ 'height': '700px' }}>
                        <h1 className="text-7xl font-extrabold text-white uppercase mx-auto text-center" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'wordSpacing': '6px' }}>
                            best travel experiences in India
                        </h1>
                        <h1 className="text-xl mt-14 text-white w-3/4 mx-auto text-center" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'wordSpacing': '6px' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro sapiente eius ut ipsam! Fuga laboriosam libero dignissimos odit consectetur explicabo, facere unde iusto quos assumenda nesciunt eum deleniti quam!
                        </h1>

                    </div>
                    <div id="arrow" className="flex justify-center items-center mt-5 cursor-pointer">
                        <KeyboardArrowDown className="text-white" fontSize="large" />
                    </div>
                </div>
                <div className="w-full relative bottom-10">
                   <Travel_template subheading="TRAVEL BY DESTINATION" heading="DREAM. EXPLORE. DISCOVER."/>
                   <div className="my-16 h-1 w-1"></div>
                   <Travel_template subheading="TRAVEL BY ACTIVITY/INTEREST" heading="THE BEST WAY TO GET AWAY."/>
                   <div className="my-0 h-1 w-1"></div>
                   <Newsletter_banner />
                   <div className="my-10 h-1 w-1"></div>
                   <Blog_template />
                   <div className="my-10 h-1 w-1"></div>
                   <Journey />
                </div>

            </div>
        </>
    );
}
export default Homepage;