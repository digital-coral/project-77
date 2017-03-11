'use strict';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '/imports/ui/layouts/MainLayout/MainLayout';
import '/imports/ui/pages/Home/Home';

FlowRouter.route('/', {
  name: 'home',
  action(params, queryParams) {
    BlazeLayout.render('MainLayout', { content: 'Home' });
  },
});
