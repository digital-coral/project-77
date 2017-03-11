'use strict';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { $ } from 'meteor/jquery';

import './Popup.html';

Template.Popup.events({
  'click .popup-toggle'(event, instance) {
    //event.stopPropagation();
    instance.$('.popup').addClass('visible');
    $('.main-layout__obfuscator').addClass('visible');
    instance.$('input').get(0).focus();
  },

  'click .popup'(event, instance) {
    event.stopPropagation();
  },

  'click .close'(event, instance) {
    event.stopPropagation();
    instance.$('.popup').removeClass('visible');
    $('.main-layout__obfuscator').removeClass('visible');
  },

  'keyup .popup-toggle'(event, instance) {
    event.stopPropagation();
    if (event.key === 'Escape') {
      instance.$('.popup').removeClass('visible');
      $('.main-layout__obfuscator').removeClass('visible');
    }
  },

  'submit .popup-toggle'(event, instance) {
    instance.$('.popup').removeClass('visible');
    $('.main-layout__obfuscator').removeClass('visible');
  },
});
