var root_url = "http://comp426.cs.unc.edu:3001/";

$(document).ready(() => {
    $('#login_btn').on('click', () => {
    
    //let user = $('#user').val();
    //let pass = $('#pass').val();

    //console.log(user);
    //console.log(pass);

    $.ajax(root_url + "sessions",
           {
           type: 'POST',
           xhrFields: {withCredentials: true},
           data: {
               user: {
               username: 'bebbitt',
               password: 'thepassword'
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

   
    let homebody=$('<div class="homebody"></div>');
    body.append(homebody);
    let header=$('<h1> Welcome to Air-KAB<h1>');
    homebody.append(header);
    let text=$('<p class="text">type stuff here</p>');
    homebody.append(text);
    let book_btn=$('<button id="book_btn">Book a Flight</button>');
    let search_btn=$('<button id="search_btn">Search</button>');

    homebody.append(book_btn);
    homebody.append(search_btn);


    $('body').on('click', '#book_btn', function () {
        console.log("book");
        let body=$('body');
        body.empty();
        let btitle=$('<h1 class="btitle">Book a Flight!</h1>');
        body.append(btitle);
        let btext=$('<p class="btext">placeholder<p>');
        body.append(btext);

        let dptext=$('<p class="dptext">Enter a departure location:</p>');
        body.append(dptext);
        let depart_place=$('<input type="text" class="depart_place"></input>');
        dptext.append(depart_place);

        let dttext=$('<p class="dttext">Enter a departure time:</p>');
        body.append(dttext);
        let depart_time=$('<input type="text" class="depart_time"></input>');
        dttext.append(depart_time);

        let attext=$('<p class="attext">Enter an arrival location:</p>');
        body.append(attext);
        let arrive_time=$('<input type="text" class="arrive_time"></input>');
        attext.append(arrive_time);

        let submit_btn=$('<button id="submit_btn">Submit Information</button>');
        body.append(submit_btn);

    });

    $('body').on('click', '#submit_btn', function () {
        let depart=$(this).parent().find('.depart_time').val();

        /*
        let answerText = $(this).parent().find('.textBox').val();

        let ans=$(this).parent().find('.textBox');
        */

    });









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


           

    
