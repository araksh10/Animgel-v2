import React from 'react';
import demoimage from '../assets/animgel_demo.jpg';

const FanArt = () => {
    return (
        <div className="m-2 md:m-10">
            <div>
                <h2 className="text-3xl font-bold">
                    Fan Arts:
                </h2>
            </div>
            <div>
                <p className="font-bold">@username</p>
                <img src={demoimage} alt="" className="md:max-w-100 max-w-full" />
                <section className="md:w-100 w-full flex justify-between text-center my-2">
                    <span className="bg-gray-700 w-full">
                        Likes
                    </span>
                    <span className="bg-gray-600 w-full">
                        Comments
                    </span>
                    <span className="bg-gray-500 w-full">
                        Share
                    </span>
                </section>
            </div>
        </div>
    )
}
export default FanArt
