import CatalogPage from '@/pages/CatalogPage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/signUpPage';
import ProtectedRoute from '@/utils/protectedRoute';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route
                path="catalog"
                element={
                    <ProtectedRoute>
                        <CatalogPage />
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
