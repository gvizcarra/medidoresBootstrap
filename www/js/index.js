var app = {
    deviceModel: function(){
		return device.model;
	},
	deviceCordova: function(){
		return device.cordova;
	},
	devicePlatform: function(){
		return device.platform;
	},
	deviceUUID: function(){
		return device.uuid;
	},
	deviceVersion: function(){
		return device.version;
	},
	deviceManufacturer: function(){
		return device.manufacturer;
	},
	deviceSerial: function(){
		return device.serial;
	},
	conexionType: function(){
	
	var networkState = navigator.connection.type;
    var states = {};
		states[Connection.UNKNOWN]  = 'Unknown';
		states[Connection.ETHERNET] = 'Ethernet';
		states[Connection.WIFI]     = 'WiFi';
		states[Connection.CELL_2G]  = 'Cell 2G';
		states[Connection.CELL_3G]  = 'Cell 3G';
		states[Connection.CELL_4G]  = 'Cell 4G';
		states[Connection.CELL]     = 'Cell ';
		states[Connection.NONE]     = 'No';

    return states[networkState];
	}
};
