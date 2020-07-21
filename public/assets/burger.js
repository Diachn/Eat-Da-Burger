$(() => {

    // Add a new burger.
    $(".create-form").on("submit", (event) => {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: $("[burger_name=devoured]:checked").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {

            // Reload the page to get the updated burger list.
            location.reload();
        });
    });

    $("#eatbutton").on("click", () => {
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevour");


        const id = $(this).data("id");
        const newDevouredState = { value: newDevour };

        // Send the PUT request.
        $.ajax(`/api/burgers/${id}/devour`, {
            type: "PUT",
            data: JSON.stringify(newDevouredState),
            contentType: "application/json; charset=UTF-8",
        }).then(() => {

            location.reload();
        });
    });



})