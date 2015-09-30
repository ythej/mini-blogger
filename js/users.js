var Users = (function() {
	var users = {
		init: function init_users() {
			this.usersList = document.getElementById('users-list');

			this.ajaxRequest = AjaxInit.createXMLHttpRequest();

			var url = 'api/display_users.php';
			this.ajaxRequest.open('GET', url, true);
			this.ajaxRequest.onreadystatechange = this.processRequest.bind(this);
			this.ajaxRequest.send(null);
		},

		processRequest: function processRequest_team() {
			if (this.ajaxRequest.readyState == 4 && this.ajaxRequest.status == 200) {
				this.usersList.innerHTML = this.ajaxRequest.responseText;
			}
		}
	}

	return users;
}());