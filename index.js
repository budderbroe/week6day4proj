let commentInput = $('#commentText');

let commentName = $('#textDisplayName');

$('#submitButton').on('click', function(event) {
    event.preventDefault();
    $('#comments').prepend(`
    <div class = 'commentContent'>
        <img src = 'download.png' alt = 'Profile Picture' width = '100px' height = '100px'>
        <div class = 'commentContentText'>
            <h1>${$(commentName).val()}</h1>
            <p>${$(commentInput).val()}</p>
        </div>
        <form>
            <input class = 'editButton' type = 'submit' value = 'Edit'>
            <input class = 'deleteButton' type = 'submit' value = 'Delete'>
        </form>
    </div>
    <div class = 'editBox editBoxToggle'>
        <form>
            <input class = '.editTextClass' type = 'text'><input type = 'submit' class = 'editSubmit'>
        </form>
    </div>
`);
});

$('#commentSection').on('click', '.editButton', function(event){
    event.preventDefault();
    let parentEdit = $(this).parents()[1];
    let editSibling = $(parentEdit).next();
    $(editSibling).toggleClass('editBox');
});
$('#commentSection').on('click', '.deleteButton', function(event){
    event.preventDefault();
    let parentDelete = $(this).parents()[1];
    let deleteSibling = $(parentDelete).next();
    $(parentDelete).remove();
    $(deleteSibling).remove();
});
$('#commentSection').on('click', '.editSubmit', function(event){
    event.preventDefault();
    let editSubmitParent = $(this).parents()[1];
    let editContentInput = $(editSubmitParent).prev();
    let editMessage = $(editContentInput).children()[1];
    let editMessageFinal = $(editMessage).children()[1];
    let editSiblingContent = $(this).prev()
    $(editMessageFinal).text(editSiblingContent.val());
    $(editSubmitParent).toggleClass('editBox');
});