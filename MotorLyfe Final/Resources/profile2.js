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

var project1banner= Titanium.UI.createLabel({
	text: 'My Ford Mustang',
	font: {fontSize: '18sp', fontWeight: 'bold'},
	color: 'black',
	top: '5%'
});
v4.add(project1banner);

var project1 = Titanium.UI.createImageView({ 
image:"http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/bd/0f/529d307aeadf8a0b4600100c/tixhr1820737814_small_240.jpeg",
top: '3%',
borderRadius: 10,
borderWidth: 4,
borderColor: 'black'
});
v4.add(project1);

project1.addEventListener('click', function(e){
       var img1= Titanium.UI.createImageView({
               image: "http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/bd/0f/529d307aeadf8a0b4600100c/tixhr1820737814_medium_500.jpeg",
               top: '5%', borderRadius: 10
       });
       var img2= Titanium.UI.createImageView({
       		image: "http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/8e/68/529d30767de0780b19000db0/tixhr-1836179532_medium_500.jpeg",
       		top: '5%', borderRadius: 10
       });
       var img3= Titanium.UI.createImageView({
       		image:"http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/8f/f8/529d453ceadf8a0b46001018/tixhr1939956302_medium_500.jpeg",
       		top: '5%', borderRadius: 10
       });
       var label=Titanium.UI.createLabel({
       		top: '2.5%'
       });
       var win= Titanium.UI.createWindow({
               width: Ti.UI.FILL,
               height: Ti.UI.FILL,
               layout: 'vertical',
               backgroundImage: 'default_bg.png'
       });
       var view=Titanium.UI.createScrollView({
       		height: '100%',
	        width: Ti.UI.FILL,
	        layout: 'vertical'
       });
       view.addEventListener('click', function(e){
               win.close();
       });
       win.add(view);
       view.add(img1);
       view.add(img2);
       view.add(img3);
       view.add(label);
       win.open();
});

var project2banner= Titanium.UI.createLabel({
	text: 'My Honda Civic',
	font: {fontSize: '18sp', fontWeight: 'bold'},
	color: 'black',
	top: '5%'
});
v4.add(project2banner);

var project2 = Titanium.UI.createImageView({ 
image:"http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/fa/4a/529cd3b5eadf8a0b46000fdb/tixhr84990727_small_240.jpeg",
top: '3%',
borderRadius: 10,
borderWidth: 4,
borderColor: 'black'
});
v4.add(project2);

project2.addEventListener('click', function(e){
       var img1= Titanium.UI.createImageView({
               image: "http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/90/2f/529a7d64eadf8a0b51000a33/tixhr1892425691_medium_500.jpeg",
               top: '2.5%', borderRadius: 10
       });
       var img2= Titanium.UI.createImageView({
       		image: "http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/d9/48/529a7c3bb55c570b1c01c69f/tixhr1066462271_medium_500.jpeg",
       		top: '5%', borderRadius: 10
       });
       var img3= Titanium.UI.createImageView({
       		image: "http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/fa/4a/529cd3b5eadf8a0b46000fdb/tixhr84990727_medium_500.jpeg",
       		top: '5%', borderRadius: 10
       });
       var label=Titanium.UI.createLabel({
       		top: '2.5%'
       });
       var win= Titanium.UI.createWindow({
               width: Ti.UI.FILL,
               height: Ti.UI.FILL,
               backgroundImage: 'default_bg.png'
       });
       var view= Titanium.UI.createScrollView({
       		height: '100%',
	        width: Ti.UI.FILL,
	        layout: 'vertical'
       });
       view.addEventListener('click', function(e){
               win.close();
       });
       win.add(view);
       view.add(img1);
       view.add(img3);
       view.add(img2);
       view.add(label);
       win.open();
});
	

profile.add(v2);
profile.add(v3);
profile.add(v4);
v2.add(v2name);
v3.add(searchBtn);
v3.add(entryBtn);

