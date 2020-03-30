import React from 'react';
export default ({ page, func }) => {
    return (
        <img
            onClick={() => func("home")}
            id="logo-mobile"
            src="images/main/desktop/EifertDesign-Logo"
            alt="logo"></img>
    )
}