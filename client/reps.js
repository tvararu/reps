Template.hello.helpers({
  repCount: function() {
    return Session.get('repCount');
  }
});

Template.hello.events({
  'click .reps': function () {
    var value = Session.get('repCount');
    Session.set('repCount', value + 1);
  },
  
  'click .reset': function () {
    Session.set('repCount', 0);
  }
});

Template.hello.rendered = function() {
  Session.set('repCount', 0);
};
