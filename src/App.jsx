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
        <ToastContainer position="top-right" style={{ width: "400px"}} progressStyle={{ background: '#fff'}} bodyClassName={() => "flex text-md p-3 items-center font-pop"} autoClose={1500} />
    </div>
  )
}

export default App;