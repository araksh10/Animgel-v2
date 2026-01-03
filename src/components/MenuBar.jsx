import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <div className="">
            <div className="flex justify-center  bg-aqua-700">
                <div className="flex justify-around italic">
                    <Link to="/" className="mx-2 my-1 opacity-75 hover:scale-110 hover:opacity-100"><button>Home</button></Link>
                    <Link to="/Blog" className="mx-2 my-1 opacity-75 hover:scale-110 hover:opacity-100"><button>Blog</button></Link>
                    <Link to="/fanart" className="mx-2 my-1 opacity-75 hover:scale-110 hover:opacity-100"><button>Fan Art</button></Link>
                    <Link to="/merch" className="mx-2 my-1 opacity-75 hover:scale-110 hover:opacity-100"><button>Merchandise</button></Link>
                </div>
            </div>
        </div>
    )
}
export default MenuBar
