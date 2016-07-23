import React from 'react';
import Navigation from '../components/navigation';
import MobileMenu from '../components/mobileMenu'


const Layout = ({ content }) => (

    <div>
        <Navigation />
        <div id="page-content">
            <MobileMenu />
            {content()}
        </div>
    </div>

);

export default Layout;