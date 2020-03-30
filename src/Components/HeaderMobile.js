import React from 'react';
export default ({ page, func }) => {
    return (
        <img
            onClick={() => func("home")}
            id="logo-mobile"
            className="mobileLogo"
            src="images/main/mobile/mobileLogo.png"
            alt="logo" ></img >
    )
}