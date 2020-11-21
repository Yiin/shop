import React from "react";
import ReactDOM from "react-dom";

const Dashboard = () => (
    <div className="p-6 sm:px-20 bg-white border-b border-gray-200">
        <div className="mt-8 text-2xl">Dashboard Component</div>
        <div className="mt-6 text-gray-500">Hello from React!</div>
    </div>
);

if (document.getElementById("dashboard-component")) {
    ReactDOM.render(
        <Dashboard />,
        document.getElementById("dashboard-component")
    );
}
