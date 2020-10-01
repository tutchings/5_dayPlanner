//set global variables
var todoList = {
    '9am': '9',
    '10am': '10',
    '11am': '11',
    '12pm': '12',
    '1pm': '1',
    '2pm': '2',
    '3pm': '3',
    '4pm': '4',
    '5pm': '5'
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

//set interval to update time every second
var setTime = setInterval(function() {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(currentTime);   
}, 1000);

//event listener for save buttons
$('.saveBtn').on('click', function(event) {
    event.preventDefault();
    
    var todo = this.id + "-todo-list";

    console.log(todo);
})



function writeCurrentTodos() {
    for (var i = 0; i < times.length; i++){
        $('#' + times[i] + '-todo-list').text(todoList[times[i]]);
    }
}

writeCurrentTodos();