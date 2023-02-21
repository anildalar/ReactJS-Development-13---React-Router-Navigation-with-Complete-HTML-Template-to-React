import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layouts from './components/ui/Layouts'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layouts />}>
                    <Route index element={<Home />}></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
