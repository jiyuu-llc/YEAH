import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Nav} from '/lib/collections';

Meteor.publish('nav', function() {
    return Nav.findOne({});
});
