$("#addButton").click(function() {
    var text = $("#newItemInput").val();
    $.post("/addItem", { text: text }, function(result){
        console.log(result);
    });
})