import CatalogPage from '@/pages/CatalogPage';
import DetailedPage from '@/pages/DetailedPage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/signUpPage';
import { useDispatch } from '@/service/store';
import { getUserList, setIsAuth, setLikes } from '@/service/userSlice';
import ProtectedRoute from '@/utils/protectedRoute';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader';

function App() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const likes = localStorage.getItem('likes');

        const fetchData = async () => {
            setIsLoading(true);
            await dispatch(getUserList(1));
            if (likes) {
                dispatch(setLikes(JSON.parse(likes)));
            }
            if (token) {
                dispatch(setIsAuth(true));
            }
            setIsLoading(false);
        };
        fetchData();
    }, [dispatch]);

    if (isLoading) {
        return <Loader />;
    }
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <CatalogPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/catalog/:id"
                element={
                    <ProtectedRoute>
                        <DetailedPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="sign-in"
                element={
                    <ProtectedRoute onlyUnAuth>
                        <SignInPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="sign-up"
                element={
                    <ProtectedRoute onlyUnAuth>
                        <SignUpPage />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;
