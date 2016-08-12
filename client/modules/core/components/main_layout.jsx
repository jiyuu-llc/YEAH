import React from 'react';
import Navigation from '../containers/navigation.js';
import EditorState from '../containers/editor.js';
import MobileMenu from './mobileMenu'

const Layout = ({ content }) => (

    <div id="reactContainer">
        <EditorState />
        <div id="metaContainer">
            <Navigation />
            <div id="page-content">
                <MobileMenu />
                {content()}
            </div>
        </div>
    </div>

);

export default Layout;
