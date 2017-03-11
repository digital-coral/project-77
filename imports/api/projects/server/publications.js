'use strict';

import { Meteor } from 'meteor/meteor';
import { Projects } from '../Projects';

Meteor.publish('projects.limited', function (limit) {
  Meteor._sleepForMs(2000);
  return Projects.find({}, { limit: limit });
});
