import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
            return(
         <React.Fragment>
 <div class="v2_30"/><div class="v2_311"></div>
        <div class="v2_32"></div>
        <div class="v2_33"></div>
        <div class="v2_34"></div>
        <div class="v2_35"></div>
       
        <div class="v2_37"></div>
       
        
        <Link to="/">
            <div class="v2_34"></div>
                      

        </Link>
        <input  type="file" accept="image/*" name="image" id="file" onchange="loadFile(event)"/>
            <label for="file"><img src="../assets/images1/upload.png" class="upload-icon1" ></img></label>
        
       
       

        </React.Fragment>
            );


    }