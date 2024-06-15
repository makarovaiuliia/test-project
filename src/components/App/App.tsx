import CatalogPage from '@/pages/CatalogPage';
import DetailedPage from '@/pages/DetailedPage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/signUpPage';
import { useDispatch } from '@/service/store';
import { getUserList, setIsAuth } from '@/service/userSlice';
import ProtectedRoute from '@/utils/protectedRoute';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setIsAuth(true));
        }
        dispatch(getUserList(1));
    }, [dispatch]);

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
