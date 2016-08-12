import {Meteor} from 'meteor/meteor';
import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import Home from './components/home.jsx';
import Mission from './components/mission.jsx';
import News from './components/news.jsx';
import Members from './components/members.jsx';
import Contact from './components/contact.jsx';
import Login from './components/login.jsx';
import Admin from './components/admin.jsx';
import Register from './components/register.jsx';

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

    FlowRouter.route('/news', {
        name: 'news',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<News />)
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

    FlowRouter.route('/contact', {
        name: 'contact',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Contact />)
            });
        }
    });

    FlowRouter.route('/login', {
        name: 'login',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Login />)
            });
        }
    });

    FlowRouter.route('/register', {
        name: 'register',
        action() {
            mount(Register);
        }
    });


    FlowRouter.route('/admin', {
        name: 'admin',
        action() {
            mount(Admin);
            Meteor.call('toggleEditor', true);
        }
    });
}
