// we're going to make a Dev Skilss App
// we need for a user to type in a dev skill
// then we will get the value of the skill
// we need to add functianlity to the button so that when we click we get the value
// we will build a dom element using that value
// then we will add that element to the DOM
// add a delete button -span tag with x as its content
// add function that will pluck it from the DOM

// State Variables
let $inputVal , $skillElement
// Event Listeners
$('button').on('click', getInputText)
//Functions
function getInputText () {
    $inputVal = $('input').val()
    $('input').val('');
    createElement($inputVal)
}

function createElement(str) {
    $skillElement = $(`<li><span>x</span> ${str}</li>`)
    addSkill($skillElement)
}

function addSkill(element) {
$('section ul').append(element);
$('span').on('click', removeSkill)
}

function removeSkill(evt){
    $(evt.target).parent().remove();
    
}