'use strict';

import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import './MainLayout.html';
import './MainLayoutLogo/MainLayoutLogo';
import './MainLayoutNavbar/MainLayoutNavbar';

Template.MainLayout.events({
  'click .main-layout__obfuscator'(event, instance) {
    instance.$(event.target).removeClass('visible');
    $('.popup').removeClass('visible');
  },
});
