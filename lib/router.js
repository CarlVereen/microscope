Router.configure({
  layoutTemplate: 'layout',
  loadTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postList'});
