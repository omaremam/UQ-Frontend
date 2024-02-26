import { Outlet, Navigate } from "react-router-dom";
import { checkLoginOrNot } from "../helper/custom";
export const ProtectedRouter = () => { 
  return checkLoginOrNot()==false ? <Outlet /> : <Navigate to='/' />
}

export const ProtectedLoginRouter = () => { 
  return checkLoginOrNot()==true ? <Outlet /> : <Navigate to='/login' />
}

