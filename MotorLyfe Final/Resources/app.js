var mainWin = Ti.UI.createWindow({
	backgroundImage: 'default_bg.png',
	layout: 'vertical'
});

var banner = Ti.UI.createView({
	height: '20%',
	width: Ti.UI.FILL,
	borderRadius: 10
});
mainWin.add(banner);

var bannerLabel=Ti.UI.createLabel({
	text: 'Welcome to MotorLyfe!',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {fontSize: '27sp', fontWeight: 'bold'}
});
banner.add(bannerLabel);

var bodyView=Ti.UI.createView({
	height: '65%',
	width: Ti.UI.FILL,
	borderRadius: 10,
	layout: 'vertical'
});
mainWin.add(bodyView);

var regBtn= Ti.UI.createButton({
	backgroundColor: '#ffd800',
	width: '60%', height: '12.5%',
	top: '20%',
	left: '20%',
	title: 'Register',
	color: 'black',
	borderRadius: 10
});
regBtn.addEventListener('click',function(e)
{
   var winReg = Titanium.UI.createWindow({
   	backgroundImage: 'default_bg.png',
   	layout: 'vertical',
   	url: 'registration.js'
   });
   mainWin.close();
   winReg.open();
});

var loginBtn= Ti.UI.createButton({
	backgroundColor: '#ffd800',
	width: '60%', height: '12.5%',
	top: '2.5%',
	left: '20%',
	title: 'Login',
	color: 'black',
	borderRadius: 10
});
loginBtn.addEventListener('click',function(e)
{
   var winLogin = Titanium.UI.createWindow({
   	backgroundImage: 'default_bg.png',
   	layout: 'vertical',
   	url: 'login.js'
   });
   mainWin.close();
   winLogin.open();
});

var bottomView = Ti.UI.createView({
	height: '15%',
	width: Ti.UI.FILL,
	borderRadius: 10
});

var viewLabel= Ti.UI.createLabel({
	text: 'Creative property of Sarah Calder, Ryan Keeble,' + '\n' + 'Mary Cruz Lopez, and Art Rutkauskas. 2013.',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {fontSize: '12sp', fontWeight: 'bold'}
});

bodyView.add(regBtn);
bodyView.add(loginBtn);
mainWin.add(bottomView);
bottomView.add(viewLabel);
mainWin.open();
