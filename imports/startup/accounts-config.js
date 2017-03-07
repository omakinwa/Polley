//import { Accounts } from 'meteor/accounts-base';

// Accounts.config({
//   sendVerificationEmail: true,
//   forbidClientAccountCreation: false
// });

//meteor add accounts-facebook

// Accounts.ui.config({
//   passwordSignupFields: 'USERNAME_ONLY',
//   //console.log()
//   // loginPath: '/login',
//   // //signUpPath: '/signup',
//   // //resetPasswordPath: '/reset-password',
//   // profilePath: '/profile',
//   // onSignedInHook: () => FlowRouter.go('/general'),
//   // onSignedOutHook: () => FlowRouter.go('/login'),
//   // minimumPasswordLength: 6//
//  });
//meteor add accounts-ui accounts-password
// Accounts.ui.config({
//   passwordSignupFields: 'USERNAME_ONLY',
//     requestPermissions: {},
//     extraSignupFields: [{
//         fieldName: 'first-name',
//         fieldLabel: 'First name',
//         inputType: 'text',
//         visible: true,
//         validate: function(value, errorFunction) {
//           if (!value) {
//             errorFunction("Please write your first name");
//             return false;
//           } else {
//             return true;
//           }
//         }
//     }, {
//         fieldName: 'last-name',
//         fieldLabel: 'Last name',
//         inputType: 'text',
//         visible: true,
//     }
//     }]
// });
