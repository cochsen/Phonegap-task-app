var tasks = [];
var counter = 0;
function task(name) {
  this.name = name;
}

$(document).ready(function() {
  
  $('#add-task-btn').click(function() {
    var name = $('#task-name').val();
    tasks[counter] = new task(name);
    counter++;
    $('#task-list ul').empty();
    for(var i = 0; i < tasks.length; i++) {
      $('#task-list ul').append('<li data-theme="a"><a href="#page-sample-task">' + tasks[i].name + '</a></li>');
}
    $('#task-list ul').listview("refresh");
  });
  
});
