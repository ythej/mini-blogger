var Signup = (function() {
	var signup = {
		init: function init_signup() {
			this.userName = document.getElementById('user-name');
			this.passWord = document.getElementById('password');
			this.submit = document.getElementById('submit');
			this.formContainer = document.getElementById('wrapper');
			this.result = document.getElementById('result');

			this.submit.addEventListener(
				'click', this.submitData.bind(this), true
			);
		},

		submitData: function submitData_signup() {
			this.ajaxRequest = AjaxInit.createXMLHttpRequest();

			var username = this.userName.value;
			var password = this.passWord.value;
			var fullName = document.getElementById('full-name').value;
			var address = document.getElementById('address').value;
			var phoneNo = document.getElementById('phone-no').value;
			var age = document.getElementById('age').value;
			var url = 'api/register.php?username='+encodeURI(username)+'&password='+encodeURI(password)+'&fullName='+encodeURI(fullName)+'&phoneNo='+encodeURI(phoneNo)+'&address='+encodeURI(address)+'&age='+encodeURI(age);
			this.ajaxRequest.open('GET', url, true);
			this.ajaxRequest.onreadystatechange = this.processRequest.bind(this);
			this.ajaxRequest.send(null);
		},

		processRequest: function processRequest_team() {
			
			if (this.ajaxRequest.readyState == 4 && this.ajaxRequest.status == 200) {
				
				this.formContainer.className = this.formContainer.className + ' hide';
				this.result.className = '';
				this.result.innerHTML = this.ajaxRequest.responseText;
			}

		}
	}

	return signup;
}());