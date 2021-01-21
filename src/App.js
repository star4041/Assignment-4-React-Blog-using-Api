import React from 'react'
import Blogs from './Components/Blogs';
import Homepage from './Components/Hompage'
import Navbar from './Components/Navbar'
import "./styling/app.css";
import { selectSignedIn } from "./features/userSlice";
import { useSelector } from "react-redux";


export const App = () => {
    const isSignedIn = useSelector(selectSignedIn)

    return (
        <div className="app">
            <Navbar />
            <Homepage />
            {isSignedIn && <Blogs />}
        </div>
    )
}
