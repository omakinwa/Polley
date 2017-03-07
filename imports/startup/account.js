import { Accounts } from 'meteor/accounts-base';

//Router.route('/register');

// Template.dashboard.events({
//   'click .logout': function(event){
//       event.preventDefault();
//       //Meteor.logout();
//   }
// });

Template.login.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({
          requestPermissions: ['user_friends', 'public_profile','email']
        }, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});

Template.Google-login.events({
    'click #google-login': function(event) {
        Meteor.loginWithGoogle({
          requestPermissions: ['user_friends', 'public_profile' , 'email']
        }, function(err){
            if (err) {
                throw new Meteor.Error("Google login failed");
            }
        });
    },
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});


// Template.register.events({
//   'submit form': function(event){
//       event.preventDefault();
//       var emailVar = event.target.registerEmail.value;
//       var passwordVar = event.target.registerPassword.value;
//       Accounts.createUser({
//           email: emailVar,
//           password: passwordVar
//       });
//   }
// });
// Template.login.events({
//   'submit form': function(event){
//       event.preventDefault();
//       var emailVar = event.target.loginEmail.value;
//       var passwordVar = event.target.loginPassword.value;
//       //Meteor.loginWithPassword(emailVar, passwordVar);
//       Meteor.loginWithFacebook();
//   }
// });
