// Make sure we wait to attach our handlers until the DOM is fully loaded.
// Make adjustments to the code to apply for Burgers

$(function () {
    $(".change-devourment").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newBurgerState = {
            devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("changed sleep to", newDevoured);
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
        console.log("TEST: " + newBurger.name)
    });


    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id);
        // Send the DELETE request.
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
