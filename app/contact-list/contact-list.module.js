angular.module('contactList', []).filter('tel', function () {
    return function (tel) {
        if (!tel) { return ''; }

        var value = tel.toString().trim();
        
        country = value.slice(0,2)
        city = value.slice(2,5)
        number = value.slice(5,12)

        number = number.slice(0, 3) + '-' + number.slice(3);

        return ( country + " (" + city + ") " + number).trim();
    };

        
});
