//ADD DOCUMENT.READY

//set global variables
var todoList = {
    '9am': '',
    '10am': '',
    '11am': '',
    '12pm': '',
    '1pm': '',
    '2pm': '',
    '3pm': '',
    '4pm': '',
    '5pm': ''
};

var times = [
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    "4pm",
    '5pm',
];

//sets todoList equal to local storage data
//if there is no data in local storage, leave todoList blank
if ((localStorage.getItem('localStorageTodoList')) !== null){
    todoList = JSON.parse(localStorage.getItem('localStorageTodoList'));
}

//writes todos to the screen
writeCurrentTodos();



//writes current todos to the screen
function writeCurrentTodos() {

    for (var i = 0; i < times.length; i++){
        $('#' + times[i] + '-todo-list').text(todoList[times[i]]);
    }

} //end function writeCurrentTodos()



//set one second time interval
//all code within this interval runs every second
//allows code to update in real time
var setTime = setInterval(function() {

    //update time on page every second
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(currentTime);

    //determine what the current date is
    var currentHour = moment().format('h');
    var amPm = moment().format('a');
    var hourAmPm = moment().format('ha');
    var index;
    

    //determines the index in the times array that matches the current time
    for (var i = 0; i < times.length; i++){

        if (hourAmPm === times[i]){
            index = i;
            break;
        } else {
            index = 9;
        } //end if/else

    } //end for loop

    //set all times to green if time is between 12am and 9am
    if (index === 9 && amPm === 'am'){
        if (currentHour > 11 || currentHour < 9){
            times.forEach(time => {
                $('#' + time + '-todo-list').css({'background-color' : 'green'});
            }); //end forEach function
        } //end inner if
    } //end outer if

    //set all times to gray if time is between 6pm and 11pm
    if (index === 9 && amPm === 'pm'){
        if (currentHour > 5 || currentHour < 12){
            times.forEach(time => {
                $('#' + time + '-todo-list').css({'background-color' : 'gray'});
            }); //end forEach function
        } //end inner if
    } //end outer if

    //set current time to red, previous times to gray, and future times to green
    if (index !== 9){
        for (var i = 0; i < times.length; i++){
            if (i < index){
                $('#' + times[i] + '-todo-list').css({'background-color' : 'gray'});
            } else if (i === index){
                $('#' + times[i] + '-todo-list').css({'background-color' : 'red'});
            } else if (i > index){
                $('#' + times[i] + '-todo-list').css({'background-color' : 'green'});
            } //end else/if conditional
        } //end for loop
    } //end if conditional
    

}, 1000);



//event listener for save buttons
$('.saveBtn').on('click', function(event) {
    event.preventDefault();
    
    //determines todo textarea associated with save button that was pressed
    var todoDiv = this.id + "-todo-list";

    //gets the user input from the associated todo textarea
    var todoUserInput = $('#' + todoDiv).val();

    //saves user input in todoList object
    todoList[this.id] = todoUserInput;

    //stores todoList in local storage
    localStorage.setItem('localStorageTodoList', JSON.stringify(todoList));

}); //end save button event listener








