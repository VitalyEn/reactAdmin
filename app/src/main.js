import $ from 'jquery';
$.get("./api", data => {
    data.forEach(file => {
        $("body").append(`<h1>${file}</h1>`)
    })
}, "JSON");

$("button").on("click", () => {
    $.post("./api/createNewPage.php", {
        "name": $("input").val()
    }, data => {
        console.log(data)
    })
});