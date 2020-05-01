//clicking on the add item button adds the item to the list or 
//hitting return

$(function() {

    $('#js-shopping-list-form').on('click', 'button', function(event) {
        event.preventDefault();
        let toAdd = $('input[name=shopping-list-entry]').val()
        $('ul').append('<li>' + '<span class="shopping-item">' + toAdd + '</span>' + 
        '<div class="shopping-item-controls">' + 
          '<button class="shopping-item-toggle">' + 
            '<span class="button-label">check</span>' + 
          '</button>' + 
          '<button class="shopping-item-delete">' + 
            '<span class="button-label">delete</span>' + 
          '</button>' +
        '</div>' + '</li>');
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
      });



    $(document).on('click', '.shopping-item-delete', function(event) {
        let leparents = this.closest('li');
        leparents.remove();
    
    });
      


});


//clicking on check strikes a line
//check becomes uncheck, and removes the line

//must use a CDN-hosted version of jQuery
//put application code in a file called index.js and link to it
//in index.html

//do not alter index.html or main css, right javascript code that works
//with existing HTML and CSS to implement the required features


//HELPFUL: .submit(), .preventDefault(), .toggleClass(), .closest()