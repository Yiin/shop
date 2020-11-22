import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => (
    <div className="flex items-center w-auto w-full" id="menu">
        <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                <li>
                    <NavLink
                        exact
                        to="/"
                        className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                        activeClassName="border-indigo-400"
                    >
                        <FontAwesomeIcon icon={faHome} />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/categories"
                        className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                        activeClassName="border-indigo-400"
                    >
                        Kolekcijos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/items"
                        className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                        activeClassName="border-indigo-400"
                    >
                        Produktai
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
);

export default Navigation;
