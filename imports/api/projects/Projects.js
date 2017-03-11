'use strict';

import { Mongo } from 'meteor/mongo';

class ProjectsCollection extends Mongo.Collection {
  insert(doc, callback) {
    const ourDoc = doc;
    ourDoc.createdAt = ourDoc.createdAt || new Date();
    var result = super.insert(ourDoc, callback);
    return result;
  }
}

export const Projects = new ProjectsCollection('projects');

Projects.deny({
  insert() { return true; },

  update() { return true; },

  remove() { return true; },
});
