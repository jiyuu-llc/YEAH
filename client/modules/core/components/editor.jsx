import React from 'react';

const toggleEditClick = () => {
  Meteor.call('toggleEditor', false);
};

const clickLogout = () => {
  Meteor.logout();
};

const toggleEditor = (state) => {
  $('#reactContainer').attr('class', state ? 'editor' : 'site');
  if (state) {
    return (
      <div id="admin-sidebar">
          <div className="sidebar-item">
              Publish
          </div>
          <div onClick={toggleEditClick.bind(this)} className="sidebar-item">
              Toggle Editor
          </div>
          <div className="sidebar-item">
              Test
          </div>
          <div className="sidebar-item">
              Test
          </div>
          <div className="sidebar-item">
              Test
          </div>
          <div className="sidebar-item">
              Test
          </div>
          <div className="sidebar-item">
              Test
          </div>
          <div onClick={clickLogout.bind(this)} className="sidebar-item">
              Logout
          </div>
      </div>
    )
  }
};

const EditorState = ({state}) => (
  <div>{toggleEditor(state)}</div>
);

export default EditorState;
