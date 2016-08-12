import {Meteor} from 'meteor/meteor';
import {Admin} from '/lib/collections';

Meteor.methods({
  'toggleEditor': (state) => {
      Admin.upsert({userId: Meteor.userId()}, {$set: {editorState: state}});
  },
  'getEditorState': () => {
      return Admin.findOne({userId: Meteor.userId()}, {fields: {editorState: 1}}).editorState;
  }
});
