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
            build_plane_seats();
            build_airlines_interface();
            purge_past_date();
           },
           error: (jqxhr, status, error) => {
               alert(error);
           }
           });
    });
});

var build_plane_seats = function(){
/*$.ajax(root_url+"data/seats",{
    type:'DELETE',
    xhrFields:{withCredentials:true},
    success:(response)=>{

    }
});

/*    $.ajax(root_url+"seats",{
        type:'GET',
        xhrFields:{withCredentials:true},
        success:(response)=>{
            let seats = response;
           // for (let i=0; i<seats.length;i++){
             //   let sid = seats[i].id;
               $.ajax(root_url+"seats/",{
                type: 'DELETE',
                xhrFields:{withCredentials:true},
                success:(response)=>{

                }
               });
            }
        
    });*/

  /* for (let p=0; p<4;p++){
        $.ajax(root_url+"planes",{
            type: 'POST',
            xhrFields:{withCredentials:true},
            data:{
                plane:{
                    info:"new plane",
                    name: "A"
                }
            }
        });
    }*/

    /*$.ajax(root_url+"planes",
    {
        type: 'GET',
        xhrFields:{withCredentials:true},
        success: (response)=>{
            let plane = response;
            for (let i=0; i<plane.length;i++){
                console.log("a");
                let p = plane[i];
                let pid = plane[i].id;
                for (let r=0; r<6;i++){
                    let rownum = 0;
                    if(r<3){
                        rownum=1;
                    }else{
                        rownum=2;
                    }
                 $.ajax(root_url+"seats",{
                    type: 'POST',
                    xhrFields:{withCredentials:true},
                    data:{
                        seat:{
                            plane_id: pid,
                            row: r,
                            number: "A",
                            info: "empty"
                        }
                    }
                });
                   }                     
            }
        }
    });*/
};

function purge_past_date(){
   /* var today = new Date(); let dd = today.getDate(); let mm = today.getMonth()+1; let yyyy = today.getFullYear();
    dd--;
    if(dd==0&&(mm==5||mm==7||mm==8||mm==10||mm==12)){
        mm--;
        dd=30;
    }
    if (dd==0&&(mm==4||mm==6||mm==9||mm==11)){
        mm--;
        dd=31;
    }
    if(dd==0&&mm==3){
        mm--;
        dd=28;
    }
    if(dd==0&&mm==1){
        dd==31;
        mm=12;
    }

    if(dd<10){
        dd = "0"+dd;
    }
    if(mm<10){
        mm="0"+mm;
    }
    let fulldate = yyyy + "-" + mm + "-" + dd;

    $.ajax(root_url+"instances",{
        type:'GET',
        xhrFields: {withCredentials: true},
        success:(response)=>{
            let instancearray = response;
            for(i=0; i<instancearray.length; i++){
                if(fulldate.localeCompare(instancearray[i].date)==0){
                    $.ajax(root_url+"tickets",{
                        type:'GET',
                        xhrFields:{withCredentials:true},
                        success:(response)=>{
                            let seatarray = response;
                            for(s=0; s<seatarray.length;s++){
                                if(seatarray[s].instance_id == instancearray[i].id){
                                    $.ajax(root_url+"tickets/"+,{
                                        type:'DELETE',
                                        xhrFields:{withCredentials:true},
                                        success:(response)=>{

                                        }
                                    });
                                }
                            }
                        }
                    });
                    $.ajax(root_url+"instances",{
                        type:'DELETE',
                        xhrFields:{withCredentials:true},
                        success:(response)=>{

                        }
                    });
                }
            }
        }
    });*/

};

var build_airlines_interface = function() {
    let body = $('body');

    body.empty();

   
    let homebody=$('<div class="homebody"></div>');
    body.append(homebody);
    let header=$('<h1> Welcome to Air-KAB<h1>');
    let header2=$('<h2>The Single Best Place for Airline Travel</h2>');
    homebody.append(header);
    homebody.append(header2);
    let welcome=$('<div class="welcome"</div>');
    homebody.append(welcome);
    let p1=$('<p class="text">Are you tired of crying babies and annoying kids? Are you tired of always getting stuck in the middle seat with no leg room? Are you tired of having to look past people in order to get a glimpse of those beautiful clouds? Are you tired of getting condescending looks for traveling alone? </p>'); 
    let p2= $('<p class="text">If you answered yes to any or all of these quetions, then Air-KAB is the place for you! <br> We are the taxis of the air for all you singles out there. We at Air-KAB go above and beyond to bring you confort. That is why every seat is a window seat. Yes, EVERY seat, so say goodbye to staring past peoples heads and hello clouds and tiny landscapes. Our single seat rows are practical and made for comfort. No more cramped leg space or forced small talk. However, the aisle is small enough to talk to the person on the other side without yelling if you are looking to make connections.</p>');
    let p3=$('<p class="text">Our website is super easy to use! If you have a destination in mind, click Book a Flight and get yourself a ticket on the single most best airline. </p>');
    let p4=$('<p class="text">Still deciding on a place to go? Have you recently had a breakup and just need to get away? Still deciding on west or east coast? No worries--we got you! Click on Browse Destination to search cities and peruse all the wondering things they have to offer. </p>');      
    let p5=$('<p class="text">Thank you for choosing Air-KAB, the single best place for airline travel!</p>');
    welcome.append(p1);
    welcome.append(p2);
    welcome.append(p3);
    welcome.append(p4);
    welcome.append(p5);
    let book_btn=$('<button id="book_btn">Book a Flight</button>');
    let search_btn=$('<button id="search_btn">Browse Destination</button>');

    homebody.append(book_btn);
    homebody.append(search_btn);


    $('body').on('click', '#book_btn', function () {
        console.log("book");
        let body=$('body');
        body.empty();
        let home_btn=$('<button id="home_btn">Home Page</button>');
        body.append(home_btn);
        let btitle=$('<h1 class="btitle">Book a Flight!</h1>');
        body.append(btitle);
        let btext=$('<p class="btext">Yay! You know where you want to go! Simply follow the instructions to input your information and book your flight!</p>');
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

        let submit_btn=$('<button id="submit_btn">Submit Information</button>');
        body.append(submit_btn);

    });


    $('body').on('click', '#home_btn', function () {   
        build_airlines_interface();

    });

    $('body').on('click', '#search_btn', function () {
        console.log("browse destination");
        let body=$('body');
        body.empty();
        let home_btn=$('<button id="home_btn">Home Page</button>');
        body.append(home_btn);
        let stitle=$('<h1 class="btitle">Search for a Destination!</h1>');
        body.append(stitle);
        let stext=$('<p class="stext">put something here</p>');
        body.append(stext);


        //search bar
        let myinput=$("<input class='myInput' type='text' placeholder='Search for a city...''>");
        body.append(myinput);
        //filtering by substring search 
        $('.myInput').on("keyup",function(){
        var value=$(this).val().toLowerCase();
 /*-here*/       $(".").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)> -1);
            });
        });
        
        $.ajax(root_url+"airports",{
            type:'GET',
            xhrFields:{withCredentials:true},
            success:(response)=>{
                for(let a=0;a<response.length;a++)
                {
                    //this is appending to every page!
                    body.after(response[a].name+" airport in "+response[a].city+'<br>');
                }
                 //need to somehow make that a class so I can call it on like 262


            }
        });




    });


    $('body').on('click', '#submit_btn', function () {
        let departt=$(this).parent().find('.depart_time').val();
        let departp=$(this).parent().find('.depart_place').val();
        console.log(departp);
        let arrivep=$(this).parent().find('.arrive_place').val();
        //add a depart date picker and change the flight searcher to a instance finder 
        //just say that the depart date is current day
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
                            if(depart&&arrive){
                                break;
                            }

                        }

                        if(depart&&arrive){
                            $.ajax(root_url+"flights",{
                                type: 'GET',
                                xhrFields: {withCredentials: true},
                                success:(response)=>{
                                    let farray=response;
                                    for(let f=0; f<farray.length;f++){
                                        //console.log("flight array loop");
                                        let fid = farray[f].id;
                                        let fdid = farray[f].departure_id;
                                        let faid = farray[f].arrival_id;
                                        if (fdid==did && faid==aid){
                                            let pid = farray[f].plane_id;
                                            $.ajax(root_url+"instances?filter[flight_id]=" + encodeURIComponent(fid),{
                                                type: 'GET',
                                                xhrFields:{withCredentials:true},
                                                success:(response)=>{
                                                    let inarray = response;
                                                    var today = new Date(); let dd = today.getDate(); let mm = today.getMonth()+1; let yyyy = today.getFullYear();
                                                    if(dd<10){
                                                            dd = "0"+dd;
                                                        }
                                                        if(mm<10){
                                                            mm="0"+mm;
                                                        }
                                                        let fulldate = yyyy + "-" + mm + "-" + dd;
                                                    for(i=0; i<inarray.length;i++){
                                                        //let fin = inarray[i].flight_id;
                                                        let din = inarray[i].date;
                                                        let info = inarray[i].info;
                                                    
                                                        //console.log(fin + " " + fid);
                                                       
                                                            if (fulldate.localeCompare(din)==0){
                                                                if(!testifinstanceisfull(fid, inarray[i].id, fulldate, info)){
                                                                    createticket(inarray[i].id,pid,fid, info,fulldate);
                                                                    return;
                                                                 } /*else {
                                                                        let instanceid = findnewinstance(dd,mm,yyyy,fid);
                                                                        let instanceinfo = getinstanceinfo(instanceid);
                                                                        let date = getinstancedate(instanceid);
                                                                        createticket(instanceid,pid,fin, instanceinfo,date);
                                                                        return;
                                                                    }*/
                                                        break;}/*else {
                                                           //check if the next day has an instance and loop that test until there are no more flights
                                                            let instanceid = findnewinstance(dd, mm, yyyy, fid);
                                                            let instanceinfo = getinstanceinfo(instanceid);
                                                            let date = getinstancedate(instanceid);
                                                            createticket(instanceid,pid,fin,instanceinfo,date);
                                                            return;
                                                        }*/
                                                    
                                                }
                                                //check if the next day has an instance and loop that test until there are no more flights
                                                            let instanceid = findnewinstance(dd, mm, yyyy, fid);
                                                            console.log("B"+instanceid);
                                                            let instanceinfo = getinstanceinfo(instanceid);
                                                            let date = getinstancedate(instanceid);
                                                            console.log("D"+instanceinfo);
                                                            createticket(instanceid,pid,fid,instanceinfo,date);
                                                            return;
                                                }
                                            })
                                            
                                            
                                           // let personal=$('<')


                                            //add book button
                                            //pull info and create ticket 


                                           
                                        
                                         return;
                                        }
                                    }
                                }
                            });
                        }

                    }
                });

    });

    function createnewinstance(date, flightid){
        let id;
        $.ajax(root_url+"instances",{
            type: 'POST',
            xhrFields:{withCredentials:true},
            data:{
                instance:{
                    flight_id: flightid,
                    date:date,
                    info:"0"
                }
            },
            success:(response)=>{
                //*******************************
                id=response.json().id;
            }

        });
        console.log("id"+id);
        return id;//getnewinstance(date,flightid);
            

        
    };

    function getnewinstance(date,flightid){
        $.ajax(root_url+"instances?filter[flight_id]="+encodeURIComponent(flightid),{
            type:'GET',
            xhrFields:{withCredentials:true},
            success:(response)=>{
                let instancearray = response;
                for(i=0;i<instancearray.length;i++){
                    console.log(instancearray.length);
                  
                    if (date.localeCompare(instancearray[i].date)==0){
                        //console.log("id"+instancearray[i].id)
                        return instancearray[i].id;
                    }
                }
            }
        });
    };

    function getinstanceinfo(instanceid){
        //do a filter thing
        var nose=true;
        $.ajax(root_url+"instances?filter[id]="+encodeURIComponent(instanceid),{
            type:'GET',
            xhrFields:{withCredentials:true},
            success:(response)=>{
                let array = response;
                for(i = 0;i<array.length;i++){
                     nose=array[i].info;console.log("E"+nose);
                    return nose;
                }
            }
        });
        console.log("P"+nose);
        return nose;
    };

    function getinstancedate(instanceid){
        var nr;
        $.ajax(root_url+"instances?filter[id]="+encodeURIComponent(instanceid),{
            type:'GET',
            xhrFields:{withCredentials:true},
            success:(response)=>{
                let array = response;
                for (i=0;i<array.length;i++){
                    console.log(array[i].date);
                     nr= array[i].date;
                    return nr;
                }
            }
        });
        return nr;
    };

 function findnewinstance(dd, mm, yyyy, fid){
    let newdate;
    var nr;
            $.ajax(root_url+"instances?filter[flight_id]="+encodeURIComponent(fid),{
            type:'GET',
            xhrFields:{withCredentials:true},
            success:(response)=>{
                let instancearray = response;
                for(i=0; i<instancearray.length; i++){
                    dd++;
                    if (mm==12 && dd==32){
                        mm=1;
                        dd=1;
                        yyyy++;
                    }
                    if ((mm==1 || mm==3 || mm==5 || mm==7 || mm==8 || mm==10)&&dd==32){
                     mm++;
                     dd=1;
                     if (mm<10){
                        mm="0"+mm;
                    }
                     } else if (mm==2 && dd==29){
                     mm++;
                     dd=1;
                     if (mm<10){
                        mm="0"+mm;
                    }
                     } else if ((mm==4||mm==6||mm==9||mm==11)&&dd==31){
                        mm++;
                        dd=1;
                        if (mm<10){
                        mm="0"+mm;
                    }
                    }
                    if (dd<10){
                        dd="0"+dd;
                    }

                   let newdate = yyyy + "-" + mm + "-" + dd;
                   let instancedate = instancearray[i].date;
                    console.log("A"+instancearray[i].info);
                    let test = instancearray[i].info;
                    //if(instancedate.localeCompare(newdate)==0){
                        if(!test.localeCompare("full")==0/*!testifinstanceisfull(instancearray[i].flight_id,instancedate,instancearray[i].info)*/){
                             /*return findnewinstance(dd,mm,yyyy,fid);
                        } else {*/
                            console.log("C"+instancearray[i].id)
                            nr = instancearray[i].id;
                            return nr;
                        } else{
                            return false;
                        }
                    /*} else {
                        console.log("D");
                        return findnewinstance(dd, mm, yyyy, fid);
                    }*/
                }
               return createnewinstance(newdate, fid);
            }
        });
            return nr;
            console.log("DDDD");
};

function testifinstanceisfull(flightid, instanceid, date, info){
   let returntext=false;
    console.log(info);
    if (info.localeCompare("full")==0){
        returntext=true;
    } else {
        let seatcount = parseInt(info,10);
        //seatcount++;
        let newinfo;
        //THIS IS HOW WE SET HOW MANY PEOPLE CAN BE ON EACH PLANE
        if(seatcount==2){
            returntext=true;
        
        $.ajax(root_url+"instances/"+encodeURIComponent(instanceid),{
            type:'PUT',
            xhrFields:{withCredentials:true},
            data:{
                instance:{
                flight_id: flightid,
                date:date,
                info:"full"
            }
        }
        });
    }
}
    return returntext;
};

function createticket(instanceid, planeid, flightid,info,date){

        let fnamet=$('<p class="fnamet">Enter your first name:</p>');
        let fname=$('<input type="text" class="fname"></input>');
        fnamet.append(fname);
        body.append(fnamet);
        let lnamet=$('<p class="lnamet">Enter your last name:</p>');
        let lname=$('<input type="text" class="lname"></input>');
        lnamet.append(lname);
        body.append(lnamet);
        
        let gendert=$('<p class="gendert">Gender:</p>');
        let gender=$('<input type="text" class="gender"></input>');
        gendert.append(gender);
        body.append(gendert);

        let aget=$('<p class="aget">Age:</p>');
        let age=$('<input type="text" class="age"></input>');
        aget.append(age);
        body.append(aget);

        let persubmit_btn=$('<button id="persubmit_btn">Submit Personal Information</button>');
        body.append(persubmit_btn);
        $('body').on('click', '#persubmit_btn', function () {
            let fn=$(this).parent().find('.fname').val();
            let ln=$(this).parent().find('.lname').val();
            let g=$(this).parent().find('.gender').val();
            let a=$(this).parent().find('.age').val();

            let seatcount = parseInt(info,10);
            //how to get instance's info
            seatcount++;
            let newinfo = ""+ seatcount;
            console.log("in"+instanceid);
            $.ajax(root_url+"instances/" + encodeURIComponent(instanceid),{
                type:'PUT',
                xhrFields:{withCredentials:true},
                data:{
                    instance:{
                    flight_id: flightid,
                    date:date,
                    info:newinfo
                }
            }
            })


            $.ajax(root_url+"seats?filter[plane_id]="+encodeURIComponent(planeid),{
                type:'GET',
                xhrFields:{withCredentials:true},
                success:(response)=>{
                            body.append('<p>Ticket successfully booked! Enjoy your trip!</p>');

                    let seatarray=response;
                    for(i=0;i<seatarray.length;i++){
                        console.log(seatarray[i].id);

                       // if(seatarray[i].plane_id==planeid){
                            $.ajax(root_url+"tickets",{
                                type:'POST',
                                xhrFields:{withCredentials:true},
                                data:{
                                    ticket:{
                                        first_name: fn,
                                        last_name:ln,
                                        age:a,
                                        gender:g,
                                        seat_id:seatarray[i].id,
                                        instance_id: instanceid
                                    }
                                }
                            });
                        //}
                    }
                }
            });

        });
            
    };


};
//};



/*   search by city --list of all airports    --airport name=city name for simpleness 
    show the airports at that city (should be one) 
    when you click on an airport, it will bring up yelp thing with reviews of city and such
    book ticket button that auto-fills desitnation stuff with specified city --still need depart 
    */ 

    /* on HOME PAGE ask for where you're leaving from and save that so never ask again 8*/ 




           

    
