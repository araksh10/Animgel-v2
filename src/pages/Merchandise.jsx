import React from 'react'

const Merchandise = () => {
    return (
        <div>
            <div className="m-2 p-2 md:m-10 md:p-10">
                <div className="">
                    <h2 className="text-3xl font-bold m-2 p-2">
                        Merchandise
                    </h2>
                </div>
                <div className="flex justify-center mt-10">
                    <section className="w-60 bg-gray-500">
                        <section className="w-full h-60 bg-gray-600">
                            <img src="" alt=""/>
                        </section>
                        <section className="bg-sky-800 text-center">
                            <p className="text-lg font-bold">Product Name</p>
                            <p>10.0$</p>
                            <section className="flex justify-evenly mt-2">
                                <button className="w-full bg-sky-300 p-1">
                                    Add to Cart
                                </button>
                                <button className="w-full bg-sky-400 p-1">
                                    Add to Wishlist
                                </button>
                            </section>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Merchandise
