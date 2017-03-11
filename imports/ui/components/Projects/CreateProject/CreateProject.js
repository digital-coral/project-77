'use strict';

import { Template } from 'meteor/templating';

import { Projects } from '/imports/api/projects/Projects';
import { insert } from '/imports/api/projects/methods';

import './CreateProject.html';

Template.CreateProject.events({
  'submit #create-project'(event, instance) {
    event.preventDefault();
    const title = event.target.title.value;
    const client = event.target.client.value;

    const result = insert.call({
      title, client,
    });

    event.target.title.value = '';
    event.target.client.value = '';

    // if (result.error) {
    //   event.stopPropagation();
    //
    //   // TODO: Show error message
    // }
  },
});
