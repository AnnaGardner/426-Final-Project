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
        let arrive_place=$('<input type="text" class="arrive_place"></input>');
        attext.append(arrive_place);

        let partyt=$('<p class="partyt">Number of people traveling in your party (including yourself):</p>');
        body.append(partyt);
        let party_num=$('<input type="text" class="party_num"></input>');
        partyt.append(party_num);

        let submit_btn=$('<button id="submit_btn">Submit Information</button>');
        body.append(submit_btn);

    });

    $('body').on('click', '#submit_btn', function () {
        console.log("submit");
        let departt=$(this).parent().find('.depart_time').val();
        let departp=$(this).parent().find('.depart_place').val();
        console.log(departp);
        let arrivep=$(this).parent().find('.arrive_place').val();
        let partynum=$(this).parent().find('.party_num').val();

        //get list of airports
                $.ajax(root_url+"airports/",
                {
                    type: 'GET',
                     xhrFields: {withCredentials: true},
                    success: (response) => {
                        let depart = false;
                        let did; let aid;
                        let arrive = false;
                        let airarray=response;
                        for(let i=0;i<airarray.length;i++){
                            let aircity=airarray[i].city;
                            if(aircity.localeCompare(departp)==0){
                                depart=true;
                                did = airarray[i].id
                            }
                            if (aircity.localeCompare(arrivep)==0){
                                arrive=true;
                                aid = airarray[i].id
                            }
                        }

                        if(depart&&arrive){
                            $.ajax(root_url+"flights",{
                                type: 'GET',
                                xhrFields: {withCredentials: true},
                                success:(response)=>{
                                    let farray=response;
                                    for(let f=0; f<farray.length;f++){
                                        let fdid = farray[f].departure_id;
                                        let faid = farray[f].arrival_id;
                                        if (fdid==did && faid==aid){
                                            let pid = farray[f].plane_id;
                                            for(let n=0; n<partynum;n++){
                                                $.ajax(root_url+"seats",{
                                                    type: 'POST',
                                                    xhrFields:{withCredentials:true},
                                                    data:{
                                                     seat:{
                                                            plane_id: pid,
                                                            row: 1,
                                                        number: "A",
                                                        cabin: "economy",
                                                        is_window:true
                                                    }
                                                }
                                            });
                                        }
                                        for (let j=0; j<partynum;j++)
                                        {
                                            console.log("party");
                                            let fnamet=$('<p class="fnamet">Enter your first name:</p>');
                                            let fname=$('<input type="text" class="fname"><input>');
                                            body.append(fnamet);
                                            fnamet.append(fname);
                                            
                                            let lnamet=$('<p class="lnamet">Enter your last name:</p>');
                                            let lname=$('<input type="text" class="lname"><input>');
                                            body.append(lnamet);
                                            lnamet.append(lname);





                                           
                                        }
                                         return;
                                        }
                                    }
                                }
                            });
                        }

                    }
                });

        //getting requested flight 
         $.ajax(root_url + "flights",
           {
           type: 'GET',
           xhrFields: {withCredentials: true},
           success: (response) => {
               //console.log(response);
               let farray=response;
               //console.log(response);
               for(let i=0; i<farray.length;i++){
                let fid=farray[i].id;
                let did=farray[i].departure_id;
                let aid=farray[i].arrival_id;

                




               }








           },
           error: () => {
               alert(error);
           }
           });
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


           

    
