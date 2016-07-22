import React from 'react';
import Navigation from '../components/navigation';


const Layout = ({ content }) => (

    <div>
        <Navigation />
        <div id="page-content">
            {content()}
        </div>
    </div>

);

export default Layout;