import React from 'react';
import Navigation from './navigation.jsx';
import MobileMenu from './mobileMenu'

const Layout = ({ content }) => (

    <div>
        <div>
            <Navigation />
            <div id="page-content">
                <MobileMenu />
                {content()}
            </div>
        </div>
    </div>

);

export default Layout;