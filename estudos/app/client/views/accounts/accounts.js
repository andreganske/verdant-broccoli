Meteor.subscribe("accounts");

Template.accountList.helpers({

	accounts: function() {
		return Accounts.find({}, {sort: {createdAt: -1}});
	}	

});

Template.addAccount.events({

	"submit .new-account" : function(event) {
		// Prevent default browser form submit
		event.preventDefault();

		var name = event.target.text.value;

		Meteor.call("addAccount", name);
		event.target.text.value = "";
	}

});