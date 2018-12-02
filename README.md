# 426-Final-Project
Final project using a Flights api to create a web application

travel planning?
    * pick a place to eat based on where you are going/number of people in party/using yelp
    * if someone wants a flight that doesn't exist we would make a new flight (saved to use for future searches)
    * create a new seat for this person (max number of seats on the plane/if plane is full make a new plane with the next day flight)
    * live interactive feature (search updates in real time)
    * have three random airlines that we choose to assign to the plane/flights
    

    *@Anna add nav bar
    *@bethany add home page button to each "page"


Each plane has one seat that is used as the seat id for each ticket (like there's a freeforall when boarding). i still need to add a way to count the number of tickets per flight to ensure it doesn't get full (thus changing the "open" info of instances to "full" and pushing the flight to another day)

When someone clicks book a flight, it will automatically attempt to book the flight for that same day. if the instance of the flight they're looking for that day is full, then the system will search through all instances (may try and incorporate the filtering function to improve) until it either finds the next open instance of the same flight or just creates a new instance the next day after the last full instance of the flight

Since instances have no way to determine time, unless we wanty to have multiple flights per day going between locations with seperate departure times, I think we should get rid of the ability to pick a time and just have one flight from a-b per day

I also hopefully added functionality that will, each time the login button is clicked, check back through the interface to see if there are any instances for previous days and, if so, delete them and their tickets from the system.

Generally, I seperated everything into functions (createticket includes the input text boxes for name, gen, age) so that way they can be called when needed from seperate pages/functions