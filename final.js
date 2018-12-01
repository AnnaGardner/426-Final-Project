var root_url = "http://comp426.cs.unc.edu:3001/";

$(document).ready(() => {
    $('#login_btn').on('click', () => {
	
	let user = $('#user').val();
	let pass = $('#pass').val();

	console.log(user);
	console.log(pass);

	$.ajax(root_url + "sessions",
	       {
		   type: 'POST',
		   xhrFields: {withCredentials: true},
		   data: {
		       user: {
			   username: user,
			   password: pass
		       }
		   },
		   success: () => {
		       build_airlines_interface();
		   },
		   error: (jqxhr, status, error) => {
		       alert(error);
		   }
	       });
    });
});

var build_airlines_interface = function() {
    let body = $('body');

    body.empty();

   

   /* for(var i=0; i<3; i++){
    	$.ajax(root_url + "flights",
	       {
		   type: 'POST',
		   data: {
		       "flight": {
    			"departs_at":   "14:30",
    			"arrives_at":   "17:10",
   				"number":       "AA 2667",
    			"departure_id": 8,
    			"arrival_id":   9
  				}
		   },
		   xhrFields: {withCredentials: true},
		   success: (response) => {
		   	//console.log(airline);
		   }
    	});
    };
*/


};


		   

    
