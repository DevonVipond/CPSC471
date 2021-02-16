import React from "react";
import CustomNavbar from "../Navbar/Navbar";

const PageWrapper = ({ children }: any ) => {
    return (
        <div>
            <CustomNavbar/>
            { children }
        </div>
    )
}

export default PageWrapper