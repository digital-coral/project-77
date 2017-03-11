'use strict';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Projects } from '/imports/api/projects/Projects';

import './Home.html';
import './ProjectOverviewCard/ProjectOverviewCard';

const limitStepSize = 3;

Template.Home.onCreated(function () {
  this.loaded = new ReactiveVar(0);
  this.limit = new ReactiveVar(limitStepSize);

  const _this = this;
  this.autorun(function subscribeToALimitedAmountOfProjects() {
    const limit = _this.limit.get();

    var subscription = _this.subscribe('projects.limited', limit);

    if (subscription.ready()) {
      _this.loaded.set(limit);
    }
  });

  this.projects = function () {
    return Projects.find({}, { limit: this.loaded.get() });
  };
});

Template.Home.helpers({
  projects() {
    return Template.instance().projects();
  },

  hasMoreProjects() {
    return Template.instance().projects().count() >= Template.instance().limit.get();
  },
});

Template.Home.events({
  'click .load-more'(event, instance) {
    event.preventDefault();

    var limit = instance.limit.get();
    limit += limitStepSize;
    instance.limit.set(limit);
  },
});
