var r=Titanium.UI.currentWindow;

var topBanner=Ti.UI.createView({
	opacity: .5,
	height: '10%',
	width: Ti.UI.FILL,
	borderRadius: 10
});
r.add(topBanner);

var title=Ti.UI.createLabel({
	color: 'black',
	font: {fontSize: '27sp', fontWeight: 'bold'},
	text: 'Registration',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});
topBanner.add(title);

var bodyView=Ti.UI.createView({
	height: '90%',
	width: Ti.UI.FILL,
	borderRadius: 10
});
r.add(bodyView);

var username=Titanium.UI.createTextField({
	color: 'black',
	top: '11%',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	width: '63%',
	height: '8%',
	hintText: 'Username'
});
bodyView.add(username);

var email = Titanium.UI.createTextField({
	color:'black',
	top:'20%',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	width:'63%',
	height:'8%',
	hintText:'Email'
});
bodyView.add(email);
var password = Titanium.UI.createTextField({
	color:'black',
	top:'29%',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	width:'63%',
	height:'8%',
	hintText:'Password',
	passwordMask:true
});
bodyView.add(password);
var password_confirmation = Titanium.UI.createTextField({
	color:'black',
	top:'38%',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	width:'63%',
	height:'8%',
	hintText:'Confirm Password',
	passwordMask:true
});
bodyView.add(password_confirmation);
var first_name = Titanium.UI.createTextField({
	color:'black',
	top:'47%',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	width:'63%',
	height:'8%',
	hintText:'First Name'
});
bodyView.add(first_name);
var last_name = Titanium.UI.createTextField({
	color:'black',
	top:'56%',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	width:'63%',
	height:'8%',
	hintText:'Last Name'
});
bodyView.add(last_name);
var registerBtn = Titanium.UI.createButton({
	title:'Register',
	top:'75%',
	width:'60%',
	height:'12.5%',
	backgroundColor: '#ffd800',
	borderRadius:10,
	color: 'black'
});
bodyView.add(registerBtn);

var Cloud=	require("ti.cloud");

registerBtn.addEventListener('click', function (){
	Cloud.Users.create({
    username: username.value,
    email: email.value,
    password: password.value,
    password_confirmation: password_confirmation.value,
    first_name: first_name.value,
    last_name: last_name.value
}, function (e) {
    if (e.success) {
        var user = e.users[0];
		var loginWin = Titanium.UI.createWindow({
   		url: 'login.js',
   		layout: 'vertical',
   		backgroundImage: 'default_bg.png'
   	});
   		r.close();
   		loginWin.open();
    } else {
        alert('Unable to register you:' + e.message);
    }
    });
});

