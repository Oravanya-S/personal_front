import { ToastContainer } from 'react-toastify';
import Router from "./route/Router";
import Navbar from './layouts/Navbar';

function App() {
  return (
    <>  
        <Router />
        <ToastContainer position="top-right" theme="light" style={{ width: "400px"}} progressStyle={{ background: '#000000'}} bodyClassName={() => "flex text-md p-3 items-center font-pop"} autoClose={3000} />
    </>
  )
}

export default App


// style={{ width: "400px", marginTop: "96px" }}