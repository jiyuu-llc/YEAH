import React from 'react';
import { composeWithTracker } from 'mantra-core';
import {Admin} from '/lib/collections';
import EditorState from '../components/editor.jsx';

const composer = (props, onData) => {
    if (Meteor.subscribe('admin').ready()){
      var state;
      try {
        state = Admin.findOne({userId: Meteor.userId()}, {fields: {editorState: 1}}).editorState;
      } catch (TypeError) {}
      finally {
        if (!state) {
          Meteor.call('toggleEditor', false);
        }
      }

      onData(null, {state});
    }
};

export default composeWithTracker(composer, EditorState)(EditorState);
