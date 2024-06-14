import { Navigate, useLocation } from 'react-router-dom';
import { getIsAuth } from '@/service/userSlice';
import { useSelector } from '@/service/store';

type ProtectedRouteProps = {
    onlyUnAuth?: boolean;
    children: React.ReactElement;
};

export default function ProtectedRoute({ onlyUnAuth = false, children }: ProtectedRouteProps) {
    const isAuth = useSelector(getIsAuth);
    const location = useLocation();

    if (onlyUnAuth && isAuth) {
        const { from } = location.state || { from: { pathname: '/' } };
        return <Navigate to={from} />;
    }

    if (!onlyUnAuth && !isAuth) {
        return <Navigate to="/sign-in" state={{ from: location }} />;
    }

    return children;
}
