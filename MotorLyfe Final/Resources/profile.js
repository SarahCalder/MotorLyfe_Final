Titanium.UI.setBackgroundImage('default_bg.png');

var profile = Ti.UI.currentWindow;
var id = Ti.App.Properties.getString('ID');
var Cloud=	require("ti.cloud");

var v2 = Ti.UI.createView({
	backgroundColor: '#cccccc',
	height: '10%',
	width: Ti.UI.FILL,
	borderRadius: 10
});

var v2name=Ti.UI.createLabel({
	text: 'Welcome to MotorLyfe',
	font: {fontSize: '27sp', fontWeight: 'bold'},
	color: 'black'
});

var v3= Ti.UI.createView({
	height: '15%',
	width: Ti.UI.FILL,
	borderRadius: 10
});

var entryBtn= Ti.UI.createButton({
	title: 'Create New Project',
	width: '26%', height: '75%',
	left: '20%',
	backgroundColor: '#ffd800',
	color: 'black',
	borderRadius: 10
});
entryBtn.addEventListener('click',function(e)
{
   var win2 = Titanium.UI.createWindow({
   	backgroundImage: 'default_bg.png',
   	layout: 'vertical',
   	title: 'Create A New Entry',
   	url: 'entry.js'});
   	var textfield= Ti.UI.createTextField();
   	var dialog= Ti.UI.createAlertDialog({
   		title: 'Name Your Project',
   		androidView: textfield,
   		buttonNames: ['OK', 'Cancel']
      });
   dialog.addEventListener('click', function(e){
   	Cloud.PhotoCollections.create({
   		name: textfield.value
   	}, function(e) {
   		if (e.success) {
   			var collection= e.collections[0];
   			alert('Project Name Saved');
   			Ti.App.Properties.setString('collectionName', textfield.value);
   		} else {
   			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
   		}
   		});
   	});
   win2.open();
   dialog.show();
   });


var searchBtn= Ti.UI.createButton({
	backgroundColor: '#ffd800',
	width: '26%', height: '75%',
	left: '55%',
	title: 'Search MotorLyfe',
	color: 'black',
	borderRadius: 10
});
searchBtn.addEventListener('click',function(e)
{
   var search = Titanium.UI.createWindow({
   	backgroundImage: 'default_bg.png',
   	layout: 'vertical',
   	title: 'Search MotorLyfe',
   	url: 'search.js'});
   	search.open();
   	profile.close();
   });

var v4= Titanium.UI.createScrollView({
	width: Ti.UI.FILL,
	height: '75%',
	layout: 'vertical'
});
	

profile.add(v2);
profile.add(v3);
profile.add(v4);
v2.add(v2name);
v3.add(searchBtn);
v3.add(entryBtn);

