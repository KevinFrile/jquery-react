$(document).ready(function () {
    var page = 1;
    var current_page = 1;
    var total_page = 0;
    var is_ajax_fire = 0;

    manageData();
    /* manage data list */

    function manageData() {
        /*

        const xhttp = new XMLHttpRequest();

        xhttp.open('GET','api/getData.php',true);

        xhttp.send();

        xhttp.onreadystatechange = function(){

            if (this.readyState == 4 && this.status == 200) {

                //console.log(this.responseText);
                let datos =JSON.parse(this.responseText)
                //console.log(datos);

                let res = document.querySelector('#tbody')
                res.innerHTML = '';

                for (let value of datos) {
                  
                    //console.log(item.title);
                    res.innerHTML +=`
                    
                <tr>
                   <td>${value.title}</td>
                   <td>${value.description}</td>
                   <td data-id="' + ${value.id} + '">
                   <button data-toggle="modal" data-target="#edit-item" class="btn btn-primary edit-item">Edit</button>
                   <button class="btn btn-danger remove-item">Delete</button>
                   </td>
                </tr>
                `

                }                
            }
        }*/

        $.ajax({
            dataType: 'json',
            url: url + 'api/getData.php',
            data: { page: page },
            success: function (resp) {
                console.log(resp)
            },
            error: function (jqXHR, estado, error) {

                console.log(estado)
                console.log(error)

            },
            complete: function (jqXHR, estado) {

                console.log(estado)

            }
        }).done(function (data) {
            total_page = Math.ceil(data.total / 8);
            current_page = page;
            $('#pagination').twbsPagination({
                totalPages: total_page,
                visiblePages: current_page,
                onPageClick: function (event, pageL) {
                    page = pageL;
                    if (is_ajax_fire != 0) {
                        getPageData();
                    }
                }
            });
            manageRow(data.data);
            is_ajax_fire = 1;
        });
    }
    /* Get Page Data*/

    function getPageData() {
        $.ajax({
            dataType: 'json',
            url: url + 'api/getData.php',
            data: { page: page }
        }).done(function (data) {
            manageRow(data.data);
        });
    }

    /* Add new Item table row */
    function manageRow(data) {
        var rows = '';
        $.each(data, function (key, value) {
            rows = rows + '<tr>';
            rows = rows + '<td>' + value.title + '</td>';
            rows = rows + '<td>' + value.description + '</td>';
            rows = rows + '<td data-id="' + value.id + '">';
            rows = rows + '<button data-toggle="modal" data-target="#edit-item" class="btn btn-primary edit-item">Edit</button> ';
            rows = rows + '<button class="btn btn-danger remove-item">Delete</button>';
            rows = rows + '</td>';
            rows = rows + '</tr>';
        });
        $("tbody").html(rows);
    }
    /* Create new Item */
    $(".crud-submit").click(function (e) {
        e.preventDefault();

        var form_action = $("#create-item").find("form").attr("action");

        var title = $("#create-item").find("input[name='title']").val();
        var description = $("#create-item").find("textarea[name='description']").val();
        if (title != '' && description != '') {
            $.ajax({
                dataType: 'json',
                type: 'POST',
                url: url + form_action,
                data: { title: title, description: description }
                
            }).done(function (data) {
                $("#create-item").find("input[name='title']").val('');
                $("#create-item").find("textarea[name='description']").val('');
                getPageData();
                $(".modal").modal('hide');
                toastr.success('Item Created Successfully.', 'Success Alert', { timeOut: 5000 });
            });
        } else {
            alert('You are missing title or description.')
        }
    });
    /* Remove Item */
    $("body").on("click", ".remove-item", function () {
        var id = $(this).parent("td").data('id');
        var c_obj = $(this).parents("tr");
        $.ajax({
            dataType: 'json',
            type: 'POST',
            url: url + 'api/delete.php',
            data: { id: id }
        }).done(function (data) {
            c_obj.remove();
            toastr.options = {

                "positionClass": "toast-top-left",
            };
            toastr["success"](":)", "Item Deleted Successfully.")

            getPageData();
        });
    });
    /* Edit Item */
    $("body").on("click", ".edit-item", function () {
        var id = $(this).parent("td").data('id');
        var title = $(this).parent("td").prev("td").prev("td").text();
        var description = $(this).parent("td").prev("td").text();
        $("#edit-item").find("input[name='title']").val(title);
        $("#edit-item").find("textarea[name='description']").val(description);
        $("#edit-item").find(".edit-id").val(id);
    });
    /* Updated new Item */
    $(".crud-submit-edit").click(function (e) {
        e.preventDefault();
        var form_action = $("#edit-item").find("form").attr("action");
        var title = $("#edit-item").find("input[name='title']").val();
        var description = $("#edit-item").find("textarea[name='description']").val();

        var id = $("#edit-item").find(".edit-id").val();
        if (title != '' && description != '') {
            $.ajax({
                dataType: 'json',
                type: 'POST',
                url: url + form_action,
                data: { title: title, description: description, id: id }
            }).done(function (data) {
                getPageData();
                $(".modal").modal('hide');

                toastr.options = {

                    "positionClass": "toast-top-left",
                };
                toastr["success"](":)", "Item Updated Successfully.")
            });
        } else {
            alert('You are missing title or description.')
        }
    });
});