var Login = (function() {
	var login = {
		init: function init_login() {
			this.userName = document.getElementById('user-name');
			this.passWord = document.getElementById('password');
			this.submit = document.getElementById('submit');
			this.formContainer = document.getElementById('form-container');
			this.result = document.getElementById('result');
			this.blogsList = document.getElementById('blogs-list');
			this.postButton = document.getElementById('post-button');
			this.postBlogButton = document.getElementById('post-blog-button');
			this.displayBLogs = document.getElementById('display-blogs');
			this.fillBlog = document.getElementById('fill-blog');
			this.submitPostButton = document.getElementById('submit-post-button');

			this.submit.addEventListener(
				'click', this.submitData.bind(this), true
			);

			this.postBlogButton.addEventListener(
				'click', this.showBlogForm.bind(this), true
			);

			this.submitPostButton.addEventListener(
				'click', this.submitBlog.bind(this), true
			);			
		},

		submitData: function submitData_login() {
			this.ajaxRequest = AjaxInit.createXMLHttpRequest();

			var username = this.userName.value;
			var password = this.passWord.value;
			var url = 'api/checklogin.php?username='+encodeURI(username)+'&password='+encodeURI(password);
			this.ajaxRequest.open('GET', url, true);
			this.ajaxRequest.onreadystatechange = this.processRequest.bind(this);
			this.ajaxRequest.send(null);
		},

		processRequest: function processRequest_login() {
			if (this.ajaxRequest.readyState == 4 && this.ajaxRequest.status == 200) {
				this.formContainer.className = this.formContainer.className + ' hide';
				this.result.className = '';
				if(this.userName.value == this.ajaxRequest.responseText) {
					if (this.userName.value == 'admin') {
						this.fetchAllNonActiveBlogs();
					}
					else {
						this.result.innerHTML = 'Welcome ' + this.ajaxRequest.responseText + '!';
						this.postButton.className = 'hot-container';
						this.fetchUserBlogs(this.ajaxRequest.responseText);
					}
				}
				else {
					this.result.innerHTML = 'Sorry, ' + this.ajaxRequest.responseText + '!';
				}
			}
		},

		fetchUserBlogs: function fetchUserBlogs_login(username) {
			this.ajaxRequest_blogs = AjaxInit.createXMLHttpRequest();
			var url = 'api/display_user_blogs.php?username='+encodeURI(username);

			this.ajaxRequest_blogs.open('GET', url, true);
			this.ajaxRequest_blogs.onreadystatechange = this.updateDOM.bind(this);
			this.ajaxRequest_blogs.send(null);
		},

		fetchAllNonActiveBlogs: function fetchAllNonActiveBlogs_login(){
			this.ajaxRequest_nablogs = AjaxInit.createXMLHttpRequest();
			var url = 'api/nablogs.php'

			this.ajaxRequest_nablogs.open('GET', url, true);
			this.ajaxRequest_nablogs.onreadystatechange = this.updateNABlogsDOM.bind(this);
			this.ajaxRequest_nablogs.send(null);	
		},

		updateNABlogsDOM: function updateNABlogsDOM_login(){
			if (this.ajaxRequest_nablogs.readyState == 4 && this.ajaxRequest_nablogs.status == 200) {
				this.blogsList.innerHTML = this.ajaxRequest_nablogs.responseText;
			}
		},

		updateDOM: function updateDOM_login(username) {
			if (this.ajaxRequest_blogs.readyState == 4 && this.ajaxRequest_blogs.status == 200) {
				this.blogsList.innerHTML = this.ajaxRequest_blogs.responseText;
			}
		},

		showBlogForm: function showBlogForm_login() {
			this.displayBLogs.className = 'hide';
			this.fillBlog.className = '';
		},

		showBlogsList: function showBlogsList_login() {
			this.displayBLogs.className = '';
			this.fillBlog.className = 'hide';
		},

		submitBlog: function submitBlog_login() {
			var postTitle = document.getElementById('post-title');
			var postDesc = document.getElementById('post-desc');
			var postTags = document.getElementById('post-tags');

			this.ajaxRequest_post = AjaxInit.createXMLHttpRequest();
			var url = 'api/post.php?postAuthor='+encodeURI(this.userName.value)+'&postTag='+encodeURI(postTags.value)+'&postTitle='+encodeURI(postTitle.value)+'&postDesc='+encodeURI(postDesc.value);
			this.ajaxRequest_post.open('GET', url, true);
			this.ajaxRequest_post.onreadystatechange = this.placePost.bind(this);
			this.ajaxRequest_post.send(null);
			postTitle.value = '';
			postTags.value = '';
			postDesc.value = '';
		},

		placePost: function placePost_login() {
			if (this.ajaxRequest_post.readyState == 4 && this.ajaxRequest_post.status == 200) {
				this.fetchUserBlogs(this.userName.value);
				this.showBlogsList();
			}
		},

		approveBlog: function approveBlog_login(id){
			this.id = id;
			this.ajaxRequest_approve = AjaxInit.createXMLHttpRequest();

			var url = 'api/approve_user_blogs.php?id='+encodeURI(id);
			this.ajaxRequest_approve.open('GET', url, true);
			this.ajaxRequest_approve.onreadystatechange = this.fetchAllNonActiveBlogs.bind(this);
			this.ajaxRequest_approve.send(null);
		},

		deleteBlog: function deleteBlog_login(id) {
			this.id = id;
			this.ajaxRequest_delete = AjaxInit.createXMLHttpRequest();

			var url = 'api/delete_blog.php?id='+encodeURI(id);
			this.ajaxRequest_delete.open('GET', url, true);
			this.ajaxRequest_delete.onreadystatechange = this.deleteBlogInDOM.bind(this);
			this.ajaxRequest_delete.send(null);
		},

		deleteBlogInDOM: function deleteBlogInDOM_login() {
			if (this.ajaxRequest_delete.readyState == 4 && this.ajaxRequest_delete.status == 200) {
				this.fetchUserBlogs(this.userName.value);
			}
		},

		editBlog: function editBlog_login(id) {
			this.showBlogForm();
			var res = id.split("-");
			this.deleteBlog(res[1]);
		}
	}

	return login;
}());