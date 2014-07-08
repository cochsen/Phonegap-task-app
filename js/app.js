var tasks = [];
var counter = 0;
function task(name) {
  this.name = name;
}

$(document).ready(function() {
  
  $('#add-task-btn').click(function() {
    var name = $('#task-name').val();
    $('#task-name').val('');
    tasks[counter] = new task(name);
    counter++;
    $('#task-list ul').empty();
    for(var i = 0; i < tasks.length; i++) {
      $(document.body).append('<div data-role="page" id="page-' + i + '">' + 
                                '<div>' + 
                                  '<h2 class="ui-bar ui-bar-a title">Task List</h2>' +
                                '</div>' + 
                                '<div id="task-content" class="ui-body ui-body-a">' + 
                                  '<div class="add-step-btn-div">' + 
                                    '<a href="#page-add-step" id="add-step-btn" class="ui-btn ui-btn-inline ui-btn-icon-left ui-icon-plus">Add Step</a>' + 
                                  '</div>' + 
                                  '<form>' + 
                                    '<img src="https://s3.amazonaws.com/FileHelper/text-file-icon.png" class="task-img" />' + 
                                    '<fieldset data-iconpos="right">' + 
                                      '<label>' + 
                                        '<input type="checkbox" id="sample-task" class="check-box" value="">' + tasks[i].name + 
                                      '</label>' + 
                                    '</fieldset>' + 
                                  '</form>' + 
                                  '<a href="#page-main" class="ui-btn ui-shadow">Back</a>' + 
                                '</div>' + 
                              '</div>');
      $('#task-list ul').append('<li id="task-' + i.toString() + '" class="task-link" data-theme="a"><a href="#page-' + i + '">' + tasks[i].name + '</a></li>');
    }
    $('#task-list ul').listview("refresh");
  });
  
  
  
});

