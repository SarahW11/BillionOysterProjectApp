function Login(form) {
	var username=["user1","nithya","sarah","daniel","demetrius","robert", "evan"]
	var password=["password1","narayanan","weltz","spongebob","tillery", "strafford","strauss"]
	var page = "loggedin" + ".html";
		if (form.username.value == username[0] && form.password.value == password[0] 
			|| form.username.value == username[1] && form.password.value == password[1]
			|| form.username.value == username[2] && form.password.value == password[2] 
			|| form.username.value == username[3] && form.password.value == password[3]
			|| form.username.value == username[4] && form.password.value == password[4]
			|| form.username.value == username[5] && form.password.value == password[5]
			|| form.username.value == username[6] && form.password.value == password[6]
			|| form.username.value == username[7] && form.password.value == password[7]) 
		{self.location.href = page;}
		else {
			alert("Incorrect username or password.\nPlease try again.");
		}
		return true;
	}