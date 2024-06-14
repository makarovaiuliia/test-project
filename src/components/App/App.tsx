import { useDispatch } from '@/service/store';
import './App.css';
import { getUserList } from '@/service/userSlice';

function App() {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(getUserList())
            .unwrap()
            .then((result) => {
                console.log(result);
            });
    };
    return <button onClick={handleClick}>Click me</button>;
}

export default App;
