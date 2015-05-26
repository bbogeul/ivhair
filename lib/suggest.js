Tasks = new Mongo.Collection("tasks");
Tasks.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Name of the style",
    max: 200
  },
  author: {
    type: String,
    label: "Your name"
  },

  planningDate: {
    type: Date,
    label: "Will you be wanting this cut soon?",
    optional: true
  },
  summary: {
    type: String,
    label: "Brief summary",
    optional: true,
    max: 1000
  }
}));
if (Meteor.isClient) {
  // This code only runs on the client
  Template.suggestBody.helpers({
   tasks: function () {
      // Show newest tasks first
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });
 
}