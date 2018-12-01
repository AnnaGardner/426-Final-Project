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

   /* body.append("<h2>Airlines</h2>");

    let airline_list = $("<ul id='airlines_list'></ul>");
    body.append(airline_list);

    let airline_add_div = $("<div>Name: <input id='new_airline_name' type='text'><br>" +
			    "<button id='make_airline'>Create</button></div>");

    body.append(airline_add_div);

    
    $.ajax(root_url + "airlines",
	   {
	       type: 'GET',
	       xhrFields: {withCredentials: true},
	       success: (airlines) => {
		   for (let i=0; i<airlines.length; i++) {
		       airline_list.append("<li>" + airlines[i].name + "</li>");
		   }
	       }
	   });

    $('#make_airline').on('click', () => {
	let airline_name = $('#new_airline_name').val();

	$.ajax(root_url + "airlines",
	       {
		   type: 'POST',
		   data: {
		       airline: {
			   name: airline_name
		       }
		   },
		   xhrFields: {withCredentials: true},
		   success: (airline) => {
		       airline_list.append("<li>" + airline.name + "</li>");
		   }
	       });
    });*/

    for(var i=0; i<3; i++){
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



};


		   

    
