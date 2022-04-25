import React from "react";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
// import './Css/navbar.css';
const list_element_left = (heading) => {
    return (
        <li className="mx-3 text-white border-b-0 border-b-white hover:border-b-2 hover:border-b-white transition-all">
            <a href="#" className="uppercase text-xs font-bold" style={{ 'fontFamily': `'Montserrat', sans-serif`,'letterSpacing':'2px' }}>
                {heading}
            </a>
        </li>);
}
const list_element_right = (heading, icon) => {
    let mainicon;
    if(icon=="SearchOutlined")
        mainicon=<SearchOutlined className="text-white" />
    else
        mainicon=<ShoppingCartOutlined className="text-white" />
    return (
        <li className="mx-3 ">
            <div>
                {mainicon}
                <a href="#" className="text-white uppercase text-xs font-bold border-b-0 border-b-white hover:border-b-2 hover:border-b-white transition-all" style={{ 'fontFamily': `'Montserrat', sans-serif`,'letterSpacing':'2px' }}>
                {heading}
            </a>
            </div>
        </li>);
}


function Navbar() {
    return (
        <>
            <div id="navbar" className="flex justify-between">
                <div id="left_navbar">
                    <ul className="flex py-7 px-3">
                        {list_element_left("travel deals")}
                        {list_element_left("about us")}
                        {list_element_left("blog")}
                        {list_element_left("faq")}
                        {list_element_left("contact")}
                    </ul>
                </div>
                <div id="right_navbar">
                    <ul className="flex py-7 px-3">
                        {list_element_right('search',"SearchOutlined")}
                        {list_element_right('cart',"ShoppingCartOutlined")}
                        
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Navbar;