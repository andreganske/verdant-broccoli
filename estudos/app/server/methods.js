Meteor.methods({
	
	addAccount: function(name) {
		Accounts.insert({
			name: name,
			balance: 0,
			owner: "undefined",
			createdAt: new Date(),
			removedAt: '',
			isActive: true
		});
	},

	removeAccount: function(accountId) {
		var account = Accounts.findOne(accountId);
		Accounts.update(accountId, { $set: { isActive: false, removedAt: new Date() }});
	}

});