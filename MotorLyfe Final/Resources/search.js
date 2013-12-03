var sw = Titanium.UI.currentWindow;
var name=Ti.App.collectionName;

var v1 = Ti.UI.createView({
	backgroundColor: '#cccccc',
	opacity: .5,
	height: '10%',
	width: Ti.UI.FILL,
	borderRadius: 10
});

var title= Ti.UI.createLabel({
	text: 'Search MotorLyfe',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {fontSize: '27sp', fontWeight: 'bold'},
	color: 'black'
});

var search = Titanium.UI.createSearchBar({
    barColor:'#ffd800', 
    color: 'black',
    showCancel:false,
    height:'60%',
    hintText: 'Search Projects for...',
    right: '7.5%',
    width:'55%',
    verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
    font: {fontSize: '15sp'}
});

var back = Ti.UI.createButton ({
	height: '60%',
	left: '7.5%',
	width: '25%',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	borderRadius: 10,
	backgroundColor: '#ffd800',
	color: 'black',
	title: 'Back'
});
back.addEventListener('click',function(e)
{
   var win4 = Titanium.UI.createWindow({
   	layout: 'vertical',
   	url: 'profile2.js'
   });
   win4.open();
   sw.close();
});

var v2 = Ti.UI.createView ({
	borderRadius: 10,
	height: '15%',
	width: 'auto'
});

var v3 = Ti.UI.createView({
	height: '60%',
	width: 'auto'
});

var v3label = Ti.UI.createLabel({
	text: 'Please check back soon for updated feature content. Thank you for your patience!' + '\n' + '-MotorLyfe Admin Team',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {fontSize: '27sp', fontWeight: 'bold'},
	color: 'black'
});

sw.add(v1);
v1.add(title);
sw.add(v2);
v2.add(search);
v2.add(back);
sw.add(v3);
v3.add(v3label);


