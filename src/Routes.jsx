import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login/Login'
const RoutesComponent= ()=>{
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    )
}

export default RoutesComponent