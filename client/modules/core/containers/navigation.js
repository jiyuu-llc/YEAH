/*fimport React from 'react';
import { composeWithTracker } from 'react-komposer';
import {Nav} from '/lib/collections';
import Navigation from '../components/navigation.jsx';

const composer = ( props, onData ) => {
    if (Meteor.subscribe('nav').ready()){
      const navItems = Nav.findOne();
      console.log(navItems);
      onData(null, { navItems } );
    }
};

export default composeWithTracker( composer, Navigation)( Navigation );
*/
