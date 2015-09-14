galleryApp.factory('MediumService',
	[function() {
		var mediumList = [
		{ medium: 'Oil'},
		{ medium: 'Acrylic'},
		{ medium: 'Watercolor'},
		{ medium: 'Pencil'},
		{ medium: 'Charcoal'},
		{ medium: 'Pastel'},
		{ medium: 'Sculpture'},
		{ medium: 'Other'}
		];

		var myObject = {

			list: function() {
				return mediumList;
			}
		};

		return myObject;
		
	}]);