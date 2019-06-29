// Make sure we wait to attach our handlers until the DOM is fully loaded.
// Make adjustments to the code to apply for Burgers

$(function () {
    $(".change-devourment").on("click", function (event) {
        var id = $(this).attr("data-burger-id");
        var newDevoured = $(this).data("newdevoured");
        console.log("data: " + newDevoured)
        var newBurgerState = {}
        if (!newDevoured) {
            newBurgerState = {
                devoured: true
            };
        } else {
            newBurgerState = {
                devoured: false
            };
        }
        console.log(newBurgerState)
        console.log("ID: " + id)
        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("changed devourment to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        // console.log("Clicked");
        var newBurger = {
            name: $("#ca").val().trim(),
        };
        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
        // console.log("TEST: " + newBurger.name)
    });

    // Send the DELETE request.
    $(".delete-burger").on("click", function (event) {
        var id = $(this).attr("data-burger-id")
        // console.log("ID = " + id);
        $.ajax("/api/burger/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted Burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
