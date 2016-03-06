var MENU_KEY = 'menuOpen';
Session.setDefault(MENU_KEY, false);

var USER_MENU_KEY = 'userMenuOpen';
Session.setDefault(USER_MENU_KEY, false);

var SHOW_CONNECTION_ISSUE_KEY = 'showConnectionIssue';
Session.setDefault(SHOW_CONNECTION_ISSUE_KEY, false);

var CONNECTION_ISSUE_TIMEOUT = 5000;

Meteor.startup(function() {

	setTimeout(function() {
		dataReadyHold.release();
		Session.set(SHOW_CONNECTION_ISSUE_KEY, true);
	}, CONNECTION_ISSUE_TIMEOUT);

});

Template.appBody.onRendered(function() {
	this.find('#content-conteiner')._uihooks = {
		insertElement: function(node) {

		}
	};
});