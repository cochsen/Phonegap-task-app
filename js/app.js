var tasks = [];
var counter = 0;
var current_task = 0;
var current_step = 0;
var current_id = '';
var this_step = 0;
function task(name, num) {
  this.name = name;
  this.num = num;
  this.steps = [];
}

$(document).ready(function() {
  
  $('#add-task-btn').click(function() {
    var name = $('#task-name').val();
    var num = counter;
    $('#task-name').val('');
    tasks[counter] = new task(name, num);
    counter++;
    $('#task-list ul').empty();
    for(var i = 0; i < tasks.length; i++) {
      $(document.body).append('<div data-role="page" id="page-' + i + '">' + 
                                '<div>' + 
                                  '<h2 class="ui-bar ui-bar-a title">Task List</h2>' +
                                '</div>' + 
                                '<div class="task-content ui-body ui-body-a">' + 
                                  '<div class="add-step-btn-div">' + 
                                    '<a href="#page-add-step" class="add-step-btn ui-btn ui-btn-inline ui-btn-icon-left ui-icon-plus">Add Step</a>' + 
                                  '</div>' + 
                                  '<div id="task-' + i + '-step-list">' +
                                    '<ul data-role="listview" data-inset="true" data-divider-theme="a">' +
                                      '<li data-theme="a">Example</li>' +
                                    '</ul>' +
                                  '</div>' +
                                  '<form>' + 
                                    '<img src="" id="smallImage" class="task-img" />'  + 
                                    '<fieldset data-iconpos="right">' + 
                                      '<label>' + 
                                        '<input type="checkbox" id="task-' + i + '-checkbox" class="check-box" value="">' + tasks[i].name + 
                                      '</label>' + 
                                    '</fieldset>' + 
                                  '</form>' + 
                                  '<a href="#page-main" class="ui-btn ui-shadow ui-icon-arrow-l ui-btn-icon-left" data-transition="slide" data-direction="reverse">Back</a>' + 
                                '</div>' + 
                              '</div>');
      $('#task-list ul').append('<li id="task-' + i + '" class="task-link" data-theme="a"><a href="#page-' + i + '" data-transition="slide" >' + tasks[i].name + '</a></li>');
    }
    $('#task-list ul').listview("refresh");
  });
  
  $('#task-list ul').on("click", "li", function() {
    var selected_task = $(this).attr("id");
    console.log(selected_task);
    for(var i = 0; i < tasks.length; i++) {
      if("task-" + i === selected_task) {
        console.log("tasks[" + i + "]");
        current_task = i;
        console.log(current_task);
      }
    }
  });
  
  $('#add-step').click(function() {
    current_step = tasks[current_task].steps.length;
    console.log("Current step: " + current_step);
    current_id = '#page-' + current_task + ' ul';
    console.log(current_id);
    this_step = $('#step-name').val();
    $('#step-name').val('');
    tasks[current_task].steps.push([current_step, this_step]);
    console.log($('#step-name').val());
    console.log(tasks[current_task]);
    $(current_id).empty();
    for (var i = 0; i < tasks[current_task].steps.length; i++) {
    $(current_id).append('<li id="task-' + current_task + '-step-' + i + '" data-theme="a"><a href="#" >' + tasks[current_task].steps[i][1] + '</a></li>');
    }
    $(current_id).listview("refresh");
  });
  
});

