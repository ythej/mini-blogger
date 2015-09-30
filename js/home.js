var Home = (function() {
	var home = {
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
				console.log("sdssd");
				this.blogsList.innerHTML = this.ajaxRequest.responseText;
			}
		}
	}

	return home;
}());