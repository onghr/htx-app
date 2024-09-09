import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const [isActive, setIsActive] = React.useState(false);
    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <NavLink
                    className={({ isActive }) => (isActive ? "active " : "") + "sidebar-brand"}
                    to={"/dashboard"}
                >
                    Dashboard
                </NavLink>

                <ul className="sidebar-nav">
                    <li className="sidebar-item">
                        <NavLink
                            className={({ isActive }) => (isActive ? "active " : "") + "sidebar-link"}
                            to={"edit-profile"}
                        >
                            Edit Profile
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink
                            className={({ isActive }) => (isActive ? "active " : "") + "sidebar-link"}
                            to={"/"}
                        >
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}