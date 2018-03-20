function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

function personalInfo() {

	info1 =  'Name : Zuzanna Gil'  + '\n' + 
			'Phone number : 501 225 774' + '\n' + 
			'E-mail address : zuzannagil@wp.pl' + device.platform + '\n';
			
	navigator.notification.alert(info);
	navigator.notification.alert(info1);
	
}
