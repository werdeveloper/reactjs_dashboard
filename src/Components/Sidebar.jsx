import React from "react";

export default function Sidebar(){
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/*  Sidebar - Brand  */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href={'/'}>
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Admin <sup>Portal</sup></div>
            </a>

            {/*  Divider  */}
            <hr className="sidebar-divider my-0" />

            {/*  Nav Item - Dashboard  */}
            <li className="nav-item active">
                <a className="nav-link" href={'/'}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            {/*  Divider  */}
            <hr className="sidebar-divider" />

            {/*  Heading  */}
            <div className="sidebar-heading">
                Addons
            </div>

            {/*  Nav Item - Pages Collapse Menu  */}
            <li className="nav-item">
                <a className="nav-link collapsed" href={'/'} data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href={'/login'}>Login</a>
                        <a className="collapse-item" href={'/signup'}>Register</a>
                        <a className="collapse-item" href={'/forget_password'}>Forgot Password</a>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href={'/404'}>404 Page</a>
                        <a className="collapse-item" href={'/blank'}>Blank Page</a>
                        <a className="collapse-item" href={'/card'}>Card Page</a>
                        <a className="collapse-item" href={'/button'}>Button Page</a>
                    </div>
                </div>
            </li>

            {/*  Nav Item - Charts  */}
            <li className="nav-item">
                <a className="nav-link" href={'/chart'}>
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li>

            {/*  Nav Item - Tables  */}
            <li className="nav-item">
                <a className="nav-link" href={'/table'}>
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li>

            {/*  Divider  */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/*  Sidebar Toggler (Sidebar)  */}
            {/* <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div> */}
        </ul>
    );
}