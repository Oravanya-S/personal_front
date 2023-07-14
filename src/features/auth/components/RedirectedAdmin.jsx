import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export default function RedirectedAdmin({ children }) {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);
    if (isAuthenticated && user.role == 1) {
        return <Navigate to="/admin/dashboard" />;
      }
    return children;
}
