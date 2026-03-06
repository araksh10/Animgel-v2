import React from 'react';
import { Link } from 'react-router-dom';
import {gql, useMutation} from "@apollo/client";
import client from "../app/ApolloClient.jsx";
import authClient from "../app/AuthApolloClient.jsx";
import {useDispatch} from "react-redux";

const MenuBar = () => {
    const dispatch = useDispatch();

    const LOGOUT_MUTATION = gql`
        mutation {
            userLogOut
        }
    `;

    const [logout, {loading}] = useMutation(LOGOUT_MUTATION, {
        client: authClient,
    });

    const handleLogOut = async () => {
        try {
            await logout();

            await client.clearStore();
            await authClient.clearStore();

            dispatch({type: "USER_LOGOUT"});

            localStorage.removeItem("token");

            window.location.href = "http://localhost:5174/login";
        } catch (err) {
            console.error("Logout failed: ", err);
        }
    };

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
            <div className="flex justify-center mt-4">
                <button
                    onClick={handleLogOut}
                    disabled={loading}
                    className="px-4 py-2 bg-sky-600 text-white rounded hover:scale-105 transition"
                >
                    {loading ? "Logging out..." : "Logout"}
                </button>
            </div>
        </div>
    )
}
export default MenuBar;
