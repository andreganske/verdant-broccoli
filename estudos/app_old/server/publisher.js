use strict;

Meteor.publish('accounts', function() {
	if (this.userId()) {
		return Accounts.find({userId: this.userId});
	} else {
		this.ready();
	}
});