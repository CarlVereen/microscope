Router.configure({
  layoutTemplate: 'layout',
  loadTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
Router.route('/post/:_id', { name: 'postPage', data: function() { return Posts.findOne(this.params._id); }});
