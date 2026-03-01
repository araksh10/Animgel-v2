import {gql, useQuery} from "@apollo/client";
import Loader from "../components/LoadingSpinner.jsx";
import {Navigate, Outlet} from "react-router-dom";


const ME_QUERY = gql`
    query Me {
        me {
            id
            username
            email
        }
    }
`;

function ProtectedLayout() {
    const {data, loading, error} = useQuery(ME_QUERY, {
        fetchPolicy: 'network-only',
    });

    if (loading) return <Loader/> ;
    if (!data?.me) {
        return <Navigate to="http:localhost:5174/login" replace />
    }

    return <Outlet />
}

export default ProtectedLayout;