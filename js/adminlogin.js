var Admin = (function() {
	var admin = {
		init: function init_users() {
			this.blogsList = document.getElementById('blogs-list');

			this.ajaxRequest = AjaxInit.createXMLHttpRequest();

			var url = 'api/display_blogs.php';
			this.ajaxRequest.open('GET', url, true);
			this.ajaxRequest.onreadystatechange = this.processRequest.bind(this);
			this.ajaxRequest.send(null);
		},

		processRequest: function processRequest_team() {
			if (this.ajaxRequest.readyState == 4 && this.ajaxRequest.status == 200) {
				this.blogsList.innerHTML = this.ajaxRequest.responseText;
			}
		}

		rejectBlog: function rejectBlog(id) {
			this.ajaxRequest_reject = AjaxInit.createXMLHttpRequest();

			var url = 'api/reject_user_blogs.php?id='+ encodeURI(id);
			this.ajaxRequest_reject.open('GET', url, true);
			this.ajaxRequest.onreadystatechange = this.processRequest.bind(this);
			this.ajaxRequest.send(null);
		}
	}

	return admin;
}());