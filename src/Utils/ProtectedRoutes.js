import { Outlet } from 'react-router-dom'
import { useUserContext } from '../Utils/UserContext'
import Login from '../Pages/Login'
import PasswordReset from '../Pages/PasswordReset';


const useAuth = () => {
    const { user } = useUserContext();
	return user? true : false
}

export const ProtectedRoutesLogin= () => {
	const isAuth = useAuth()
	return isAuth ? <Outlet /> : <Login />
}
export const ProtectedRoutesPasswordReset= () => {
	const isAuth = useAuth()
	return isAuth ? <Outlet /> : <PasswordReset />
}

