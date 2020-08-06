// This is for both reset modal and credit account modals

var resetmodal = document.getElementById("reset_password_modal");

// Get the button that opens the modal
var resetbtn = document.getElementById("myresetBtn");

// Get the <span> element that closes the modal
var closespan = document.getElementsByClassName("close_btn1")[0];

// When the user clicks on the button, open the modal
resetbtn.onclick = function () {
    resetmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closespan.onclick = function () {
    resetmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == resetmodal) {
        resetmodal.style.display = "none";
    }
}

// for credit modal
var creditmodal = document.getElementById("credit_account_modal");
var creditbtn = document.getElementById("mycreditBtn");
var closecredit = document.getElementsByClassName("close_btn2")[0];

creditbtn.onclick = function () {
    creditmodal.style.display = "block";
}
closecredit.onclick = function () {
    creditmodal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == creditmodal) {
        creditmodal.style.display = "none";
    }
}



// Submit form on image upload
document.getElementById("file-1").onchange = function () {
    document.getElementById("img_upload").submit();
};
// Fetching upload image contents
'use strict';

; (function ($, window, document, undefined) {
    $('.inputfile').each(function () {
        var $input = $(this),
            $label = $input.next('label'),
            labelVal = $label.html();

        $input.on('change', function (e) {
            var fileName = '';

            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else if (e.target.value)
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                $label.find('span').html(fileName);
            else
                $label.html(labelVal);
        });

        // Firefox bug fix
        $input
            .on('focus', function () { $input.addClass('has-focus'); })
            .on('blur', function () { $input.removeClass('has-focus'); });
    });
})(jQuery, window, document);