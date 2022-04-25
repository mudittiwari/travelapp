import { Public } from "@material-ui/icons";
import arrowimage from './assets/arrowimage.svg';
import blog_one from './assets/blog_one.jpg';
import blog_two from './assets/blog_two.jpg';
import blog_three from './assets/blog_three.jpg';
import blog_four from './assets/blog_four.jpg';
function Blog_card(props) {
    var src;
    if (props.card == "1") {
        src = blog_one;
    }
    else if (props.card == "2") {
        src = blog_two;
    }
    else if (props.card == "3") {
        src = blog_three;
    }
    else {
        src = blog_four;
    }
    return (
        <>
            <div id="blog_card">
                <div className="relative p-4">
                    <img src={src} alt="" />
                    <div className="w-20 flex justify-center items-center h-7 bg-white absolute right-6 top-6 px-12 py-4">
                        <h1 className="text-xs font-semibold uppercase" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'color': "#666", 'letterSpacing': '2px' }}>
                            Gear
                        </h1>
                    </div>
                </div>
                <div id="blog_card_content" className="p-4">
                    <h1 className="text-center" style={{ 'fontSize': '13px', 'fontWeight': '500', 'color': '#333', 'fontFamily': `'Montserrat', sans-serif` }}>Publised on Jun 30,2022</h1>
                    <h1 className="text-center my-4" style={{ 'fontSize': '26px', 'fontWeight': '600', 'fontFamily': `'Montserrat', sans-serif` }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, est.</h1>
                    <h1 style={{ 'fontSize': '14px', 'fontWeight': '500', 'fontFamily': `'Montserrat', sans-serif`, 'color': '#555' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quidem quisquam, deleniti ut praesentium placeat recusandae similique dicta, quia maxime eos reiciendis necessitatibus illo nulla?</h1>
                </div>
                <div className="mt-auto h-14 p-0"><button id="btd" className="relative w-full h-14 uppercase text-xs font-semibold m-0" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'letterSpacing': '2px', 'color': 'rgb(216, 25, 94)' }}>View Travel Deals</button></div>

            </div>
        </>
    );
}



function Blog_template() {
    return (
        <>
            <div className='w-full px-5'>
                <div className="flex items-center ml-5">
                    <Public style={{ 'color': '#666' }} />
                    <hr className="w-48 mx-2" style={{ 'backgroundColor': '#666', 'height': '3px' }} />
                    <h1 className="text-sm font-bold  uppercase" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'color': "#666", 'letterSpacing': '3px' }}>
                        LATEST POSTS
                    </h1>
                </div>
                <h1 className="text-7xl font-extrabold ml-5 mt-5 text-black uppercase" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'wordSpacing': '6px' }}>
                    FROM OUR BLOG
                </h1>
                <h1 className="font-medium ml-5 mt-5 w-4/5" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'color': "#333", 'fontSize': '18px', 'lineHeight': '25px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero incidunt expedita sed corporis. Totam saepe beatae voluptas nostrum architecto minima laborum, ad impedit quas, asperiores.
                </h1>
                <div className="flex items-center mt-5 w-max ml-5" id="arrow_right">

                    <h1 className="text-xs font-semibold  uppercase" style={{ 'fontFamily': `'Montserrat', sans-serif`, 'color': "#333", 'letterSpacing': '2px' }}>
                        View all posts
                    </h1>
                    <div className="ml-5" >
                        <img src={arrowimage} width="100px" alt="" />
                    </div>
                </div>
                <div className="w-full flex flex-row justify-around my-10">
                    <Blog_card card="1" />
                    <Blog_card card="2" />

                </div>
                <div className="w-1 h-1"></div>
                <div className="w-full flex flex-row justify-around my-10">
                    <Blog_card card="3" />
                    <Blog_card card="4" />

                </div>
            </div>
        </>
    );
}

export default Blog_template;