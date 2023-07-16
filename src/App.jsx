import { ToastContainer, Zoom, Slide, Flip, Bounce } from 'react-toastify';
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
        <ToastContainer pauseOnHover={false} position="top-right" transition={Zoom} style={{ width: "400px" }} progressStyle={{ background: '#fff'}} bodyClassName={() => "flex text-md p-3 items-center font-pop"} autoClose={1000} />
    </div>
  )
}

export default App;