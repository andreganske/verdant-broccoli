Accounts.ui.config({
	extraSignupFields: [
		{
			fieldName: 'first-name',
			fieldLabel: 'Nome completo',
			inputType: 'text',
			visible: true,
			saveToProfile: true,
			validate: function(value, errorFunction) {
				if (value.trim() == '') {
					errorFunction('Seu nome é obrigatório ');
					return false;
				} else {
					return true;
				}
			}
		}
	]
});