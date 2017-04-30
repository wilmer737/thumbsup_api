
let request = $.ajax({
    url: '/submission',
    dataType: 'json',

});

request.done((data) => {
    console.log(data);
});

// console.log(submissions);
