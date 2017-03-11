'use strict';

import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Projects } from './Projects';

export const insert = new ValidatedMethod({
  name: 'projects.insert',
  validate: new SimpleSchema({
    title: { type: String },
    client: { type: String },
  }).validator(),
  run({ title, client, }) {

    const stage = 'Initializing';
    const progress = Math.floor(Math.random() * 100);

    const project = {
      title,
      client,
      stage,
      progress,
    };

    Projects.insert(project);
  },
});
