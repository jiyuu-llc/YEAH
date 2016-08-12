import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Nav, Admin} from '/lib/collections';

Meteor.publish('nav', function() {
    return Nav.find({});
});

Meteor.publish('admin', function() {
    return Admin.find({userId: this.userId});
});

Meteor.publish('users.single', function() {
    return Meteor.users.find({});
});
