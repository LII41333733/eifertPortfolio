import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
export default ({ page, func }) => {
    const [burgerExpanded, setBurgerExpanded] = useState(false);

    useEffect(() => {
        setBurgerExpanded(false)
    }, [page]);

    return (
        <>
            <div className="dFlex justifyContentCenter alignItemsCenter">
                <img
                    onClick={() => func("home")}
                    id="logo-mobile"
                    className="mobileLogo"
                    src="images/main/mobile/mobileLogo.png"
                    alt="logo"></img>
                <img
                    onClick={() => setBurgerExpanded(!burgerExpanded)}
                    className="burgerMenu"
                    src="images/main/mobile/burgerMenu.png"
                    alt="menu"></img>
            </div>
            <div className={`mobileNavOuter ${burgerExpanded ? "navMenuExpanded" : "navMenu"}`}>
                <ul className={burgerExpanded ? "navMenuDisplayed" : "navMenuHidden"}>
                    <li
                        onClick={() => func("home")}
                        className={`mobileNavItem rockwell ${page !== "home" && "fontWeightLighter"}`}>Work</li>
                    <li
                        onClick={() => func("contact")}
                        className={`mobileNavItem rockwell ${page !== "contact" && "fontWeightLighter"}`}>Contact</li>
                    <li
                        onClick={() => func("about")}
                        className={`mobileNavItem rockwell ${page !== "about" && "fontWeightLighter"}`}>About</li>
                </ul>
            </div>
            <div>
            </div>

        </>)
}