const userPreferences = document.getElementById('userPreferences');
const checkRestrictions = userPreferences.querySelectorAll('input[type="checkbox"]');
//used chatGPT to better understand the difference between elements that can / can't be iterable in a DOM manipulation - and how to target the chcekboxes in the form

userPreferences.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from reloading the page
    for (let item of checkRestrictions) {
        if (item.checked) {
            console.log(item.name); //just to test if this is working
        }
    }
});
//if I submit more than once with different inputs, will the previous inputs still count because the page wasn't reloaded? so I would need to add an event to remove filters if the box is unchecked?