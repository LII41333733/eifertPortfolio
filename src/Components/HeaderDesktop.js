import React from 'react';
import { resetDesktop } from '../Utilities';
export default ({ page, func }) => {
    return (
        <div className={"header"}>
            <img
                onClick={() => {
                    func("home");
                    resetDesktop();
                }}
                className="logo"
                src="images/main/desktop/EifertDesign-Logo"
                alt="logo"
            />
            <div id="navList">
                <span
                    className="cursor"
                    onClick={() => {
                        func("home");
                        resetDesktop(true);
                    }}>
                    WORK
                    </span>
                <span
                    className="cursor"
                    onClick={() => func("contact")}>
                    CONTACT
                    </span>
                <span
                    className="cursor"
                    onClick={() => func("about")}>
                    ABOUT
                    </span>
            </div>
        </div>
    )
}