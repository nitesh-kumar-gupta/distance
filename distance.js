let getDegToRad = function(deg) {
    return deg * (Math.PI/180);
}
let getSquare = function(data) {
    return data * data;
}
exports.getDistance = function(obj, from) {
    try {
        const eRadius = 6371; //Earth radius in Km
        let lat2 = from.lat;
        let long2 = from.long;
        let lat1 = parseFloat(obj.latitude);
        let long1 = parseFloat(obj.longitude);
        let deltaLat = getDegToRad(lat2-lat1);
        let deltaLong = getDegToRad(long2-long1); 
        let a =  getSquare(Math.sin(deltaLat/2)) + Math.cos(getDegToRad(lat1)) * Math.cos(getDegToRad(lat2)) *  getSquare(Math.sin(deltaLong/2)); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var distance = eRadius * c; // Distance in km
        return distance;
    } catch(err) {
        throw err;
    }
}