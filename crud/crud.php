<!DOCTYPE html>
<html lang="es">

<head>
    <title>PHP Jquery Ajax CRUD Example</title>

    <!--jquery-->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>

    <!-- bootstrap-->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/js/bootstrap.min.js"></script>

    <!-- paginador twbsPagination.min.js-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twbs-pagination/1.4.2/jquery.twbsPagination.min.js" integrity="sha512-frFP3ZxLshB4CErXkPVEXnd5ingvYYtYhE5qllGdZmcOlRKNEPbufyupfdSTNmoF5ICaQNO6SenXzOZvoGkiIA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


    <!-- validate.min.js plugin de jquery-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js" integrity="sha512-37T7leoNS06R80c8Ulq7cdCDU5MNQBwlYoy1TX/WUsLFC2eYNqtKlV0QjH7r8JpG/S0GUMZwebnVFLPd6SU5yg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


    <!-- toastr.min.js notificaciones-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" integrity="sha512-VEd+nq25CkR676O+pLBnDW09R7VQX9Mdiij052gVCp5yVH3jGtH70Ho/UUv4mJDsEdTvqRCFZg0NKGiojGnUCw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css" integrity="sha512-3pIirOrwegjM6erE5gPSwkUzO+3cTjpnV9lexlNZqvupR64iZBnOOTiiLPb9M36zpMScbmUNIcHUqKD47M719g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <script type="text/javascript">
        var url = "http://localhost/jquery/";
    </script>
    <script src="js/item-ajax.js"></script>

    <!-- Estilos CSS MENU -->
    <link rel="stylesheet" href="css/menu.css">

</head>

<style>
    #navbar-crud{
    width: 100%;
    background-color: #368eec;
    padding: 13px;
    
}

#navbar-crud a{
    padding-left: 6.5%;
}

#enlace1{

font-size: 1.9em;
color: rgb(255, 255, 255);
text-decoration: none;
margin-right: 2%;
}

#enlace1:hover{

color: rgb(0, 0, 0);
transition: 0.3s;

}
</style>

<body>
    <div id="navbar-crud">
        <nav>
            <a id="enlace1" href="http://localhost:3000/">
                VOLVER
            </a>
        </nav>

    </div>
    <div class="container">



        <br><br>
        <div class="row mt-5">
            <div class="col-lg-12 margin-tb">
                <div class="pull-left">
                    <h2>PHP Jquery Ajax CRUD Example</h2>
                </div>
                <div class="pull-right">

                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#create-item">
                        Create Item
                    </button>

                </div>
            </div>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th width="200px">Action</th>
                </tr>
            </thead>
            <tbody id="tbody">

            </tbody>
        </table>
        <ul id="pagination" class="pagination-sm"></ul>

        <!-- Create Item Modal -->
        <div class="modal fade" id="create-item" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        <h4 class="modal-title" id="myModalLabel">Create Item</h4>
                    </div>
                    <div class="modal-body">
                        <form data-toggle="validator" action="api/create.php" method="POST">
                            <div class="form-group">

                                <label class="control-label" for="title">Title:</label>
                                <input type="text" name="title" class="form-control" data-error="Please enter title." required />

                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="title">Description:</label>
                                <textarea name="description" class="form-control" data-error="Please enter

description." required></textarea>

                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">

                                <button type="submit" class="btn crud-submit btn-success">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Edit Item Modal -->
        <div class="modal fade" id="edit-item" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        <h4 class="modal-title" id="myModalLabel">Edit Item</h4>
                    </div>
                    <div class="modal-body">
                        <form data-toggle="validator" action="api/update.php" method="put">
                            <input type="hidden" name="id" class="edit-id">
                            <div class="form-group">

                                <label class="control-label" for="title">Title:</label>
                                <input type="text" name="title" class="form-control" data-error="Please enter title." required />

                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="title">Description:</label>
                                <textarea name="description" class="form-control" data-error="Please enterdescription." required></textarea>

                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-success crud-submit-edit">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>