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
]

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



//set interval to update time every second
var setTime = setInterval(function() {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(currentTime);   
}, 1000);



//event listener for save buttons
$('.saveBtn').on('click', function(event) {
    event.preventDefault();
    
    //determines todo div associated with save button that was pressed
    var todoDiv = this.id + "-todo-list";

    //gets the user input from the associated todo div
    var todoUserInput = $('#' + todoDiv).val();

    //saves user input in todoList object
    todoList[this.id] = todoUserInput;

    //stores todoList in local storage
    localStorage.setItem('localStorageTodoList', JSON.stringify(todoList));

}); //end save button event listener





