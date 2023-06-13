import { ToastContainer } from 'react-toastify';
import Router from "./route/Router";
import { useSelector } from 'react-redux';
import Loading from './components/Loading';

function App() {
  const initialLoading = useSelector(state => state.auth.initialLoading);
  if (initialLoading) {
    return <Loading />;
  }

  return (
    <div>  
        <Router />
        <ToastContainer position="top-right" theme="light" style={{ width: "400px"}} progressStyle={{ background: '#000000'}} bodyClassName={() => "flex text-md p-3 items-center font-pop"} autoClose={3000} />
    </div>
  )
}

export default App;