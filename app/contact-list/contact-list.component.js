angular.
  module('contactList').
  component('contactList', {
    templateUrl: 'contact-list/contact-list.template.html',
    controller: function ContactListController($http) {
      var self = this;
      self.orderProp = 'name';

      $http.get('http://localhost:3000/contacts').then(function(response) {
        self.contacts = response.data;
      }, function (error){
        self.error = "We are unable to load your contact list at this time.";
      });
    }
  });