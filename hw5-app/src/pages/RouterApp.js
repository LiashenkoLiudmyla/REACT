import { Routes, Route, Navigate } from "react-router-dom";

import { Main } from "./Main";
import { FormPage } from "./FormPage";

export const RouterApp = () => {
    
    return(
        <div>
            <Routes>
                <Route path='*' element={<Navigate to='/' />} />
                <Route path='/' element={<Main />} />
                <Route path='/form-page' element={<FormPage />} />
            </Routes>
        </div>
    )
}