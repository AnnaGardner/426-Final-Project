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
        book();
    });

    let response_div = $('<div id="response_div"></div>');
     
        function book(){
        //console.log("book");
        let body=$('body');
        body.empty();
        let home_btn=$('<button id="home_btn">Home Page</button>');
        body.append(home_btn);
        let btitle=$('<h1 class="btitle">Book a Flight!</h1>');
        body.append(btitle);

        let book_div = $('<div id="book"></div>');
        let btext=$('<p class="btext">Yay! You know where you want to go! Simply follow the instructions to input your information and book your flight!</p>');
        book_div.append(btext);

        let dptext=$('<p class="dptext">Enter a departure location:</p>');
        book_div.append(dptext);
        let depart_place=$('<input type="text" class="depart_place"></input>');
        dptext.append(depart_place);

        let dttext=$('<p class="dttext">Enter a departure time:</p>');
        book_div.append(dttext);
        let depart_time = $('<input type="time" class="depart_time"></input>');

        //let depart_time=$('<input type="number" class="depart_time"></input>');
        dttext.append(depart_time);

        let attext=$('<p class="attext">Enter an arrival location:</p>');
        book_div.append(attext);
        let arrive_place=$('<input type="text" class="arrive_place"></input>');
        attext.append(arrive_place);

        let submit_btn=$('<button id="submit_btn">Submit Information</button>');
        book_div.append(submit_btn);
        body.append(book_div);

        //let response_div = $('<div id="response"><div>');
        body.append(response_div);

    };


    $('body').on('click', '#home_btn', function () {   
        build_airlines_interface();

    });

    //browse destination page
    $('body').on('click', '#search_btn', function () {
        console.log("browse destination");
        let body=$('body');
        body.empty();
        body.append(response_div);
        response_div.empty();
        let home_btn=$('<button id="home_btn">Home Page</button>');
        body.append(home_btn);
        let stitle=$('<h1 class="btitle">Search for a Destination!</h1>');
        body.append(stitle);
        let stext=$('<p class="stext">Not sure where to go? Search for a city or airport to see if we have flights going there. Also, we know you hate arriving somewhere with the wrong clothes. That is why if you click on an airport, you can see the current weather in that city so you can come prepared!</p>');
        body.append(stext);


        //search bar
        let myinput=$("<input class='myInput' type='text' placeholder='Search for a city...''>");
        body.append(myinput);
        //filtering by substring search 
        $('.myInput').on("keyup",function(){
        var value=$(this).val().toLowerCase();
        $(".airport").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)> -1);
            });
        });
        

        let airportList =  $('<div class="airportlist"></div>');
        body.append(airportList);   
        let search_div = $('<div id=search_div></div>');
        body.append(search_div);   
        $.ajax(root_url+"airports",{
            type:'GET',
            xhrFields:{withCredentials:true},
            success:(response)=>{
                let array=response; 
                console.log(response);
                for(let a=0;a<array.length;a++)
                {
                    let adiv=create_airport_div(array[a]);
                    console.log(adiv);
                    airportList.append(adiv);   
                }
            }
        });

        $('body').on("click", '.airport', function() {
            search_div.empty();
            console.log("it comes here");
            //somehow add api 
            var weather_root="https://api.openweathermap.org/data/2.5/weather?";
            var api_key="&APPID=a93370ac9b8eced5bac889dff05e31f3&units=imperial";
            let i=$(this).attr('id');

            let c=$(this).find('.airportName').html();         //think we need ids 
            c=c.substring(c.lastIndexOf(",")+1);
            console.log(c);
            //where do I put the key?????
            $.ajax(weather_root+"q= "+c+api_key,{  
                
           // $.ajax(weather_root+"q= "+arrive_place+api_key,{    //is arrive_place the correct thing?? 
                type: 'GET',
               // xhrFields:{withCredentials:true},
                success:(response)=>{
                    let airport = c;
                    console.log("weather");
                    console.log(response);  //temp is in kelvin!
                    let temp=response.main.temp; //could put a picture for different temp ranges 
                    let cname=response.name; 
                    console.log(temp);
                    search_div.append('The current temperature in '+cname+' is '+temp+'F'+'<br>');
                     search_div.append("<p>Like the look of your choice? Simply enter your departure location and flight time and we'll find your flight for you!</p>");
                    let dptext=$('<p class="dptext">Enter a departure location:</p>');
                    search_div.append(dptext);
                    let depart_place=$('<input type="text" class="depart_place"></input>');
                    dptext.append(depart_place);
                    let dttext=$('<p class="dttext">Enter a departure time:</p>');
                    search_div.append(dttext);
                    let depart_time = $('<input type="time" class="depart_time"></input>');
                    dttext.append(depart_time);
                    let weather_submit_btn=$('<button id="weather_submit_btn">Submit Information</button>');
                    search_div.append(weather_submit_btn);
                    var filter = "airports?filter[city]="+airport;
                    $('body').on('click','#weather_submit_btn',function(){
                        console.log("c"+c);

                        $.ajax(root_url+"/airports",{
                        //$.ajax(root_url+filter,{
                            type:'GET',
                            xhrFields:{withCredentials:true},
                            success: (response) => {
                                let airportid = response;
                                console.log(response);
                                console.log("length"+airportid.length);
                                for (ai=0;ai<airportid.length;ai++){
                                    console.log(airport+"test"+airportid[ai].city);
                                    console.log(airport.localeCompare(airportid[ai].city)==0);
                                    //don't know why this is testing negative, will keep looking
                                    if(airport.toLowerCase().localeCompare(airportid[ai].city.toLowerCase())==0){
                                        ai=airportid.length+1;
                                        let id = airportid[ai].id;
                                         console.log("airportid"+id);
                                        let arriveloc = cname;
                                        let departptest = $(this).parent().find('.depart_place');
                                        let departp=$(this).parent().find('.depart_place').val();
                                        let departttest = $(this).parent().find('.depart_time');
                                        let departt=$(this).parent().find('.depart_time').val();
                                        if (!departttest.val()&!departptest.val()){
                                            response_div.append("<p>Please input your desired flight time and departure location.</p>");
                                        } else if(!departptest.val()){
                                            response_div.append("<p>Please input your desired departure location.</p>");
                                        } else if(!departttest.val()){
                                            response_div.append("<p>Please input your desired flight time.</p>");
                                        } else {
                                            flightcheck(departp, departt,arriveloc,true,id);
                                        }
                                    }
                                }
                            }
                        });//airportfilter
                    });//weather click
                }

            });

            //when calling url say root?q=London&APPID=a93370ac9b8eced5bac889dff05e31f3


        });


    });  

    let create_airport_div=(airport)=>{
        let adiv = $('<div class = "airport" id = '+airport.id+'></div>');
        let airportname = adiv.append('<div class = "airportName">'+airport.name+', '+airport.city+'</div>');
        airportname.attr('id',airport.id);
        adiv.append(airportname);
        return adiv;

    };


   $('body').on('click', '#submit_btn', function () {
        let arriveptest = $(this).parent().find('.arrive_place');
        let arrivep = $(this).parent().find('.arrive_place').val();
        let departptest = $(this).parent().find('.depart_place');
         let departp=$(this).parent().find('.depart_place').val();
        //console.log(departp);
        /*let arriveptest = $(this).parent().find('.arrive_place');
        let arrivep=$(this).parent().find('.arrive_place').val();*/

        let departttest = $(this).parent().find('.depart_time');
        let departt=$(this).parent().find('.depart_time').val();
        //let hour = parseInt(departt.substring(1,2),10);
        //console.log("AAa"+hour);
        //departt= parseInt(departt,10);
        //console.log("AAA"+departt);
        console.log(departp+"EE");
        
        if (!departttest.val()&!departptest.val()&&!arriveptest.val()){
            response_div.append("<p>Please input your desired flight time, departure location, and arrival location. If you do not already know where'd you like to travel, we are happy to offer you our search feature to pick your next adventure!</p>");
            response_div.append(search_btn);
        } else if(!departttest.val()&&!arriveptest.val()){
            response_div.append("<p>Please input your desired flight time and arrival location. If you do not already know where'd you like to travel, we are happy to offer you our search feature to pick your next adventure!</p>");
            response_div.append(search_btn);
        } else if (!departttest.val()&&!departptest.val()){
            response_div.append("<p>Please input your desired flight time and departure location.</p>");
        } else if (!departptest.val()&&!arriveptest.val()){
            response_div.append("<p>Please input your desired departure location and arrival location.  If you do not already know where'd you like to travel, we are happy to offer you our search feature to pick your next adventure!</p>");
            response_div.append(search_btn);
        } else if(!departptest.val()){
            response_div.append("<p>Please input your desired departure location.</p>");
        } else if(!departttest.val()){
            response_div.append("<p>Please input your desired flight time.</p>");
        } else if(!arriveptest.val()){
            response_div.append("<p>Please input your desired arrival location. If you do not already know where'd you like to travel, we are happy to offer you our search feature to pick your next adventure!</p>");
            response_div.append(search_btn);
        } else {
        flightcheck(departp, departt,arrivep,false);
    }
   });

   function flightcheck(departp, departt, arrivep,arrivefine,arriveid){
    console.log("arriveid"+arriveid);
        response_div.empty();
        
        var hourstring="";

        if(departt.includes(":")){
            console.log("E");
            var newdepartt=departt.split("");
            var hour=""; var min="";
            for(d=0;d<newdepartt.length;d++){
                if (d<2){
                    hour=hour+newdepartt[d];
                } else {
                    let dtest = ""+newdepartt[d];
                    if(!dtest.localeCompare(":")==0){
                    min=min+newdepartt[d];
                }
            }
        }//for
            console.log("hour"+hour);
            console.log("min"+min);
            var fulltime = "";
                //var newmin = parseInt(min,10);
            //console.log("newmin"+newmin);
            if(min>53){
                hour = parseInt(hour,10)+1
                min=":00";
            } else if(min>44||min>38){
                min=":45";
            } else if(min>29||min>22){
                min=":30";
            } else if(min>14||min>8){
                min=":15";
            } else if (min>=0){
                min=":00";
            }
            fulltime = hour+min;
            if(hour>=12){
                hour=hour-12;
            }
            hourstring="2000-01-01T"+fulltime+":00.000Z";
            fulltime = hour+min;
        } else {
            fulltime=hour+":00";
            hourstring="2000-01-01T"+fulltime+":00.000Z";
           // fulltime=departt;
            hour=departt;
            if(hour>=12){
                hour=hour-12;
            }
            min="00";
            fulltime = hour+":00";
            //hourstring = "2000-01-01T"+departt+":00:00.000Z";
        }

    
        //add a depart date picker and change the flight searcher to a instance finder 
        //just say that the depart date is current day
        //get list of airports

        var today = new Date(); var dd = today.getDate(); var mm = today.getMonth()+1; var yyyy = today.getFullYear();
        if(dd<10){
            dd = "0"+dd;
        }
        if(mm<10){
            mm="0"+mm;
        }
        var fulldate = yyyy + "-" + mm + "-" + dd;
        var orgdate = fulldate;
        var firstcheck=false;
            $.ajax(root_url+"airports/",{
                type: 'GET',
                xhrFields: {withCredentials: true},
                success: (response) => {
                    var depart = false;
                    var did; var aid;
                    var arrive = false;
                    let airarray=response;
                    var departerror=true;var arriveerror=true;
                    console.log(response);

                    for(i=0;i<airarray.length;i++){
                        console.log(arrivep+"arrive"+aircity);

                        var aircity=airarray[i].city;
                        if(aircity.toLowerCase().localeCompare(departp.toLowerCase())==0){
                            depart=true;
                            departerror = false;
                            did = airarray[i].id;
                        } /*else {
                          did = airarray[i].id;
                            }*/
                        if(arrivefine==true&&!firstcheck){
                            arrive=true;
                            arriveerror=false;
                            aid=arriveid;
                            firstcheck=true;
                        } else if (aircity.toLowerCase().localeCompare(arrivep.toLowerCase())==0){
                            arrive=true;
                            arriveerror=false;
                            aid = airarray[i].id;
                        }
                     /*else{
                              aid = airarray[i].id;
                            }*/
                        if(depart&&arrive){
                            break;
                        }

                    }//for

                    /*if(!depart){
                        departerror=departp;
                    }
                    if (!arrive){
                        arriveerror=arrivep;
                    }*/

                    if(!(depart&&arrive)){
                        if(arriveerror&&departerror){
                            response_div.append("<p>Apologies, we do not have airports in either of those cities.");
                        } else if(arriveerror){
                            response_div.append("<p>Apologies, but as of right now we do not have an airport in " + arrivep +".");
                        } else if (departerror){
                            response_div.append("<p>Apologies, but as of right now we do not have an airport in " + departp +".");
                        }
                        //airporterror(departerror,departerror);
                        //error catch if airports don't exist
                    } else {

                        if(departp.toLowerCase().localeCompare(arrivep.toLowerCase())==0){
                            response_div.append("<p>Please select another airport for either your arrival or departure location, as you've input the same location for both.");
                        } else {

                    
                    /*if(!depart){
                        airporterror(departp);
                    }
                    if(!arrive){
                        airporterror(null,arrivep);
                    }*/


                            var doesflightexist=false;
                            $.ajax(root_url+"flights",{
                                type: 'GET',
                                xhrFields: {withCredentials: true},
                                success:(response)=>{
                                    let farray=response;
                                    var testmin = 0;
                                    var newtime = ""; var nfhs=""; var flhour = ""; var flmin = "";

                                    for(f=0;f<farray.length;f++){
                                        //console.log(farray[f].info);
                                        var fdid = farray[f].departure_id;
                                        var faid = farray[f].arrival_id;
                                        var time = farray[f].departs_at;
                                        
                                        if (fdid==did && faid==aid&&time.localeCompare(hourstring)==0){
                                            doesflightexist=true;
                                            console.log("BB");
                                            f=farray.length++;
                                        } else {
                                            var teststring = time.split("");
                                                for(i=10;i<16;i++){
                                                    nfhs=nfhs+teststring[i];
                                                    if(i<13){
                                                        flhour = flhour+teststring[i];
                                                    } else if (i>13){
                                                        flmin = flmin+teststring[i];
                                                    }
                                                }
                                                if(fdid==did&&faid==aid&&flhour.localeCompare(hour)==0){
                                                    console.log("0099");
                                                    var newtest=0;
                                                
                                                    flhour = parseInt(flhour,10); flmin=parseInt(flmin,10); subhour=parseInt(subhour,10); submin=parseInt(submin,10);
                                                    if(flmin>submin){
                                                        newtest = flmin-submin;
                                                    } else if(flmin<submin){
                                                        newtest = submin-flmin;
                                                    }

                                                    if(newtest<testmin){
                                                        testmin=newtest;
                                                        newtime = nfhs;
                                                        hourstring = time;
                                                    }

                                            /*if(nexthourflight(time, hour,min)){
                                                doesflightexist=true;
                                            }*/
                                                }
                                            }
                                        }

                           /* if(!doesflightexist){
                                var response = nexthourflight(newtime);
                                /*if(response){
                                    console.log("T");
                                    doesflightexist=true;
                                };*/
                            //};

                                    if(!doesflightexist/*&&!response*/){
                                        $.ajax(root_url+"planes",{
                                            type:'GET',
                                            xhrFields:{withCredentials:true},
                                            success:(response)=>{
                                            for(r=0;r<1;r++){
                                                pid = response[r].id;
                                                console.log(aid+"aid");
                                                $.ajax(root_url+"flights",{
                                                    type:'POST',
                                                    xhrFields:{withCredentials:true},
                                                    data:{
                                                        flight:{
                                                            departs_at:fulltime,
                                                            arrives_at:fulltime,
                                                            number:1,
                                                            departure_id: did,
                                                            arrival_id:aid,
                                                            plane_id: pid
                                                        }
                                                    },success:(response)=>{
                                                        newflightid = response.id;
                                                        depart=true;arrive=true;
                                                        console.log("A");
                                                        $.ajax(root_url+"instances",{
                                                            type:'POST',
                                                            xhrFields:{withCredentials:true},
                                                            data:{
                                                                instance:{
                                                                    flight_id:newflightid,
                                                                    date: fulldate,
                                                                    info: "0"
                                                                }
                                                            },success:(response)=>{
                                                                var found=false;
                                                                if(!found){
                                                                    console.log("AO");
                                                                    checkifflight(did,aid,newflightid,fulldate, fulldate,departp, arrivep, fulltime, response.id, pid, response.info, dd, mm,yyyy,response.date);
                                                                    found=true;
                                                                }
                                                                return;
                                                            }//success
                                                        });//root_url+instances
                                                    }//success
                                                });//root_url+flights
                                            }//for
                                        }//success
                                    });//planes
                           
                                } else {
                                    if(depart&&arrive/*!(depart&&arrive)*/){
                                        console.log("EE");
                                        $.ajax(root_url+"flights",{
                                            type: 'GET',
                                            xhrFields: {withCredentials: true},
                                            success:(response)=>{
                                                let farray=response;
                                                for(f=0; f<farray.length;f++){
                                                         //console.log("flight array loop");
                                                    var fid = farray[f].id;
                                                    var fdid = farray[f].departure_id;
                                                    var faid = farray[f].arrival_id;
                                                    var time = farray[f].departs_at;
                                        
                                                    if (fdid==did && faid==aid&&time.localeCompare(hourstring)==0){
                                                    console.log("PP");
                                                        var pid = farray[f].plane_id;
                                                        $.ajax(root_url+"instances?filter[flight_id]=" + encodeURIComponent(fid),{
                                                            type: 'GET',
                                                            xhrFields:{withCredentials:true},
                                                            success:(response)=>{
                                                                var inarray = response;
                                                                inarray = inarray.sort(function(a,b){
                                                                    return a.id-b.id;
                                                                });
                                                                var found = false;
                                                                for(u=0; u<inarray.length;u++){
                                                                    var din = inarray[u].date;
                                                                    var info = inarray[u].info;
                                                                    if(!found&&!testifinstanceisfull(fid, inarray[u].id, din, info)){
                                                                        var instance = inarray[u].id;
                                                                        checkifflight(did,aid,fid,din, orgdate,departp, arrivep, fulltime, instance, pid, info, dd, mm,yyyy,din);
                                                                        found=true;
                                                                        u=inarray.length+1;
                                                                    } else {
                                                                        dd++;
                                                                        if (mm==12 && dd==32){
                                                                            mm="0"+1;
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
                                                                        fulldate = yyyy + "-" + mm + "-" + dd;
                                                                    }//else
                                                                }//for loop
                                                            }//success
                                                        });//instance filter
                                                    }//if fdid=did
                                     //f=farray.length+1;
                                                }//farray
                                            }//success
                                        });//flights
                                    }//depar
                                }//doesflightexist
                            }//success
                        });//flights ajax
                    }//are the two cities the same thing
                }//do those airports actually exist
                        //add a thing that creates a new flight and a new instance based on what they've typed if they say something new
                         //ajax post directly below should create a new flight and instance, just need to figure out where in the program that it needs to go

                    
            }//airports succes
        });//air
        //}//if time is null
    };//function
            

     function checkifflight(did,aid,flightid,date,tdate,dp,ar,ti,instance,pid,info,dd,mm,yyyy,din){
        response_div.empty();
        $.ajax(root_url+"airports/"+encodeURIComponent(did),{
            type:'GET',
            xhrFields:{withCredentials:true},
            success:(response)=>{
                //let depart = response;
                var departname;var departcity; var arrivename; var arrivecity;
                /*for(d=0;d<depart.length;d++){
                    departname=depart[d].name;
                    departcity=depart[d].city;
                }*/
                departname = response.name;
                departcity=response.city;
                $.ajax(root_url+"airports/"+encodeURIComponent(aid),{
                    type:'GET',
                    xhrFields:{withCredentials:true},
                    success:(response)=>{
                        /*let arrive = response;
                        for(a=0;a<arrive.length;a++){
                            arrivename=arrive[a].name;
                            arrivecity=arrive[a].city;
                        }*/
                        arrivename = response.name;
                        arrivecity = response.city;
                        if(date.localeCompare(tdate)==0){
                                        text = "You will be booking this flight: from " + departname + " in " + departcity + " to " + arrivename + " in " + arrivecity + " at " + ti + " on " + date;
                                    } else {
                                        text = "Regretably, your initial choice of flight is not available. We can offer you a flight from " + departname + " in " + departcity + " to " + arrivename + " in " + arrivecity + " at " + ti + " on " + date;
                                    }
                                    response_div.append(text);
                                    response_div.append("<p>To book your ticket, click yes. If you're not happy with this flight, please search again.</p>");
                                    let yes_btn=$('<button id="yes_btn">Correct flight</button>');
                                    response_div.append(yes_btn);
                                    $('#response_div').on('click', '#yes_btn', function () {
                                        createticket(instance,pid,flightid, info,dd,mm,yyyy,din);
                                    });
                    }
                });
            }
        });

    
    };//function

    function nexthourflight(newtime){
        console.log("TTTT");
       response_div.append("<p>Is this time - " + newtime + " - suitable for your flight, or would you prefer your original request?</p>");
       response_div.append("<button id = 'timeyes_btn'>Yes</button>");
       response_div.append("<button id='timeno_btn'No</button>");
       var response = false;
       $('body').on('click', '#timeyes_btn', function(){
        console.log("YYYYY");
        response= true;
       });
       $('body').on('click','#timeno_btn',function(){
        console.log("NNNNNN");
        response = false;
       });
       return response;
    };

    var id;
    function createnewinstance(date, flightid){  //date is undefined!!!!!!!!!!!!
        console.log(date);
        console.log("creating new instance for date");
       //var id=0;
//console.log("flightid= "+flightid);
//console.log("date= "+date);             
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
                //console.log(response);
                id=response.id; 
                console.log("responseid="+id);
                returnf(id);
                //return id;
            }

        });
        //console.log("id= "+id);
        //return id;//getnewinstance(date,flightid);
            

        
    };

    function airporterror(error1, error2){
        //var error_div = $('<div id=error_div></div>');

        if(error1&&error2){
            response_div.append("<p>Apologies, we do not have airports in either of those cities. Please click empty to try again.");
        } else if(error1!=null){
            response_div.append("<p>Apologies, but as of right now we do not have an airport in " + error1 +". Please click empty to try again.");
        } else if (error2){
            response_div.append("<p>Apologies, but as of right now we do not have an airport in " + error2 +". Please click empty to try again.");
        }
        response_div.append('<button id="ticket_btn">Empty</button>');
        //body.append(error_div);

        $('body').on('click', '#persubmit_btn', function () {
            alert("$");
            response_div.empty();
            book();
        });
    };

function testifinstanceisfull(flightid, instanceid, date, info){
    console.log("testing if instance is full");
   var returntext=false;
    //console.log(info);
    if(info==null){
        info="open";
    }

    console.log("info"+info);
    console.log("inst"+instanceid);
    if (info.localeCompare("full")==0){
        returntext=true;
        console.log("instanceisfull");
    } else {
        var seatcount = parseInt(info,10);
        //seatcount++;
        var newinfo;
        //THIS IS HOW WE SET HOW MANY PEOPLE CAN BE ON EACH PLANE
        if(seatcount==2){
            returntext=true;
            console.log("instance should be defined as full");
        
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

function createticket(instanceid, planeid, flightid,info,dd,mm,yyyy,orgdate){
    response_div.empty();
    console.log("createtickedid="+instanceid);
    console.log("Creating ticket");
    var newdate;

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
            var testa = parseInt(a,10);
            console.log("atest"+a);
            console.log("test"+testa);
            if(isNaN(testa)){
                response_div.append('<p>Age is invalid');
            } else {

            var seatcount = parseInt(info,10);
            //how to get instance's info
            seatcount++;
            var newinfo = ""+ seatcount;
            if(newinfo.localeCompare("2")||seatcount==2){
                console.log("RRRR");
                newinfo = "full";
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

                   newdate = yyyy + "-" + mm + "-" + dd;

             $.ajax(root_url+"instances",{
            type: 'POST',
            xhrFields:{withCredentials:true},
            data:{
                instance:{
                    flight_id: flightid,
                    date:newdate,
                    info:"0"
                }
            },
            success:(response)=>{
                console.log("newdate"+newdate);
                //*******************************
                //console.log(response);
               /* id=response.id; 
                console.log("responseid="+id);
                returnf(id);*/
                //return id;
            }

        });
            }
           // console.log("in= "+instanceid);

           //var date = yyyy+"-"+mm+"-"+dd;
            $.ajax(root_url+"instances/" + encodeURIComponent(instanceid),{
                type:'PUT',
                xhrFields:{withCredentials:true},
                data:{
                    instance:{
                    flight_id: flightid,
                    date:orgdate,
                    info:newinfo
                }
            }
            });

           



            $.ajax(root_url+"seats?filter[plane_id]="+encodeURIComponent(planeid),{
                type:'GET',
                xhrFields:{withCredentials:true},
                success:(response)=>{
                            body.append('<p>Ticket successfully booked! Enjoy your trip!</p>');

                    let seatarray=response;
                    for(i=0;i<seatarray.length;i++){
                        //console.log(seatarray[i].id);
                        seatid = seatarray[i].id;

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
                                        seat_id:seatid,
                                        instance_id: instanceid
                                    }
                                },
                                success:(response)=>{
                                    //console.log("ticket ");
                                    //console.log(response);
                                    let ticket_btn=$('<button id="ticket_btn">See Ticket</button>');
                                    body.append(ticket_btn);

                                    $('body').on('click', '#ticket_btn', function () {   //we can either clear screen or put at bttom
                                        //console.log("print ticket");
                                        let ticket_div=$('<div class="ticket_div"><div>');
                                        let firstn=fn;//response.first_name;
                                        let lastn=ln;//response.last_name;
                                        let full_name=firstn+" "+lastn+" ";
                                        //console.log(full_name);
                                        //not really sure why not showing up 
                                        let perinfo=g+", "+a+" years old";//response.gender+", "+response.age+" years old");
                                        let seat_info="Seat "+seatid+", id";//"Seat "+response.seat_id+", id");
                                        ticket_div.append(full_name);
                                        ticket_div.append(perinfo);
                                        ticket_div.append(seat_info);
                                        body.append(ticket_div);
            });

                                }
                            });
                        //}
                    }
                }
            });





}
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




           

    
