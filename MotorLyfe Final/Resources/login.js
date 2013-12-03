var l= Ti.UI.currentWindow;

var banner = Ti.UI.createView({
	height: '20%',
	width: Ti.UI.FILL,
	borderRadius: 10
});
l.add(banner);

var bannerLabel=Ti.UI.createLabel({
	text: 'User Login',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {fontSize: '27sp', fontWeight: 'bold'}
});
banner.add(bannerLabel);

var v2= Ti.UI.createView({
	height: '80%',
	width: Ti.UI.FILL,
	layout: 'vertical'
});
l.add(v2);

var username=Titanium.UI.createTextField({
	color: 'black',
	top: '15%',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	width: '63%',
	height: '10%',
	hintText: 'Username'
});
v2.add(username);

var password = Titanium.UI.createTextField({
	color:'black',
	top:'2.5%',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	width:'63%',
	height:'10%',
	hintText:'Password',
	passwordMask:true
});
v2.add(password);

var loginBtn = Titanium.UI.createButton({
title:'Login',
	backgroundColor: '#ffd800',
	color: 'black',
	top:'2.5%',
	width:'63%',
	height:'10%',
	borderRadius:10
});
v2.add(loginBtn);

var Cloud=	require("ti.cloud");

loginBtn.addEventListener('click', function(){
Cloud.Users.login({
    login: username.value,
    password: password.value,
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        Ti.App.Properties.setString('ID', user.id);
		var profileWin = Titanium.UI.createWindow({
   		url: 'profile.js',
   		layout: 'vertical'
   	});
   		l.close();
   		profileWin.open();
    } else {
        alert('Unable to log you in:' + e.message);
    }
    });
});