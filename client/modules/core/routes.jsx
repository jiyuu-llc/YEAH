import {Meteor} from 'meteor/meteor';
import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import Home from './components/home.jsx';
import Mission from './components/mission.jsx';
import Facilities from './components/facilities.jsx';
import Members from './components/members.jsx';

export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(MainLayout);

    FlowRouter.route('/', {
        name: 'home',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Home />)
            });
        }
    });

    FlowRouter.route('/mission', {
        name: 'mission',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Mission />)
            });
        }
    });

    FlowRouter.route('/facilities', {
        name: 'facilities',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Facilities />)
            });
        }
    });

    FlowRouter.route('/members', {
        name: 'members',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Members />)
            });
        }
    });
}