var w=Titanium.UI.currentWindow;
var textfield=Ti.App.collectionName;
var id=Ti.App.Properties.getString('ID');

var Cloud=        require("ti.cloud");

function uploadPhoto( _source, _callback) {
        var onSuccess = function(e){
                if(e.media){
                           Cloud.Photos.create({
                              photo: e.media,
                              collection_name: Ti.App.Properties.getString('collectionName')
                           }, function (e) {
                              if (e.success) {
                                  var photo = e.photo[0];
                              } else {
                                  alert('Error:\\n' +
                                      ((e.error && e.message) || JSON.stringify(e)));
                              }
                            _callback && _callback(e);
   
                           });
                  }
         };
         
         switch(_source){
                 case "CAMERA":
                          Ti.Media.showCamera({
                                  animated: true,
                                  allowEditing: true,
                                  autohide: true,
                                  mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
                                  success: onSuccess,
                                  error: function(e){ alert('Error:\\n' +
                             ((e.error && e.message) || JSON.stringify(e)));}
                          });
                          break;
                 case "GALLERY":
                          Ti.Media.openPhotoGallery({
                                  animated: true,
                                  allowEditing: true,
                                  autohide: true,
                                  mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
                                  success: onSuccess,
                                  error: function(e){ alert('Error:\\n' +
                             ((e.error && e.message) || JSON.stringify(e)));}
                          });
                          break;
                 default:
        }
}

var entryv1=Ti.UI.createView({
        backgroundColor: '#cccccc',
        opacity: .5,
        height: '10%',
        width: Ti.UI.FILL,
        borderRadius: 10
});
w.add(entryv1);

var entryTitle=Ti.UI.createLabel({
        color: 'black',
        font: {fontSize: '27sp', fontWeight: 'bold'},
        text: 'Create New Project',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});
entryv1.add(entryTitle);

var entryv2=Ti.UI.createView({
        height: '20%',
        width: Ti.UI.FILL
});
w.add(entryv2);

var cameraUploadBtn=Ti.UI.createButton({
        id: 'camera',
        backgroundImage: 'camera.png',
        height: '75%', width: '22%',
        left: '35%',
        borderRadius: 10
});
entryv2.add(cameraUploadBtn);

cameraUploadBtn.addEventListener('click', function(e){
        uploadPhoto('CAMERA', function(e){
                alert("Picture Uploaded");
        });
});

var galleryUploadBtn=Ti.UI.createButton({
        id: 'gallery',
        backgroundImage: 'photoframe.png',
        height: '65%', width: '20%',
        left: '10%'
});
entryv2.add(galleryUploadBtn);

galleryUploadBtn.addEventListener('click', function(e){
        uploadPhoto('GALLERY', function(e){
                alert("Picture Uploaded");
        });
});

var entryv3=Ti.UI.createScrollView({
        height: '65%',
        width: Ti.UI.FILL,
        layout: 'vertical'
});
w.add(entryv3);

entryv3.addEventListener('click', function(e){
});

var the_img = Titanium.UI.createImageView({ 
image:"http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/9e/03/529a7c46eadf8a0b51000a2e/tixhr531162180_small_240.jpeg",
top: '5%',
left: '7.5%'
});
entryv3.add(the_img);

the_img.addEventListener('click', function(e){
        var bigImg= Titanium.UI.createImageView({
                image: "http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/9e/03/529a7c46eadf8a0b51000a2e/tixhr531162180_medium_500.jpeg"
        });
        var view= Titanium.UI.createWindow({
                width: Ti.UI.FILL,
                height: Ti.UI.FILL
        });
        view.addEventListener('click', function(e){
                view.close();
        });
        view.add(bigImg);
        view.open();
});

var img3 = Titanium.UI.createImageView({ 
image:"http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/d9/48/529a7c3bb55c570b1c01c69f/tixhr1066462271_small_240.jpeg",
top: '5%',
left: '7.5%'
});
entryv3.add(img3);

img3.addEventListener('click', function(e){
        var bigImg= Titanium.UI.createImageView({
                image: "http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/d9/48/529a7c3bb55c570b1c01c69f/tixhr1066462271_medium_500.jpeg"
        });
        var view= Titanium.UI.createWindow({
                width: Ti.UI.FILL,
                height: Ti.UI.FILL
        });
        view.addEventListener('click', function(e){
                view.close();
        });
        view.add(bigImg);
        view.open();
});

var img4 = Titanium.UI.createImageView({ 
image:"http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/90/2f/529a7d64eadf8a0b51000a33/tixhr1892425691_small_240.jpeg",
top: '5%',
left: '7.5%'
});
entryv3.add(img4);

img4.addEventListener('click', function(e){
        var bigImg= Titanium.UI.createImageView({
                image: "http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/90/2f/529a7d64eadf8a0b51000a33/tixhr1892425691_medium_500.jpeg"
        });
        var view= Titanium.UI.createWindow({
                width: Ti.UI.FILL,
                height: Ti.UI.FILL
        });
        view.addEventListener('click', function(e){
                view.close();
        });
        view.add(bigImg);
        view.open();
});

var img5 = Titanium.UI.createImageView({ 
image:"http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/fa/4a/529cd3b5eadf8a0b46000fdb/tixhr84990727_small_240.jpeg",
top: '5%',
left: '7.5%'
});
entryv3.add(img5);

img5.addEventListener('click', function(e){
        var bigImg= Titanium.UI.createImageView({
                image: "http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/fa/4a/529cd3b5eadf8a0b46000fdb/tixhr84990727_medium_500.jpeg"
        });
        var view= Titanium.UI.createWindow({
                width: Ti.UI.FILL,
                height: Ti.UI.FILL
        });
        view.addEventListener('click', function(e){
                view.close();
        });
        view.add(bigImg);
        view.open();
});

var submit=Titanium.UI.createButton({
        title:'Submit',
        backgroundColor: '#ffd800',
        color: 'black',
        right:'10%',
        width:'25%',
        height:'50%',
        borderRadius:10
});
entryv2.add(submit);

submit.addEventListener('click', function(e){
        var p=Titanium.UI.createWindow({
                url: 'profile2.js',
                layout: 'vertical'
        });
        p.open();
        w.close();
});

var legal = Ti.UI.createView({
	height: '5%',
	width: Ti.UI.FILL,
	borderRadius: 10
});
w.add(legal);

var legalLabel= Ti.UI.createLabel({
	text: 'Gallery icon made by Freepik from Flaticon.com',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {fontSize: '12sp', fontWeight: 'bold'}
});
legal.add(legalLabel);
