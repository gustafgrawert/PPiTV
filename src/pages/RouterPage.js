import React from "react";
import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom'
import Home from "./Home";
import Upload from "./Upload"
import { Link } from "react-router-dom";
import ImagePreview from "./ImagePreview";


export default function RouterPage() {
            return(
        <div>
            <Router>
                <Routes>
                    <Route path="/"  element={<Home/>}/>
                    <Route path="/upload" element={<Upload/>}/>
                    <Route path="/ImagePreview" element={<ImagePreview/>}/>
                </Routes>

            </Router>

        </div>
            );

 
    }


