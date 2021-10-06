<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    
    
    <title>Javascript-Rafi</title>

    <script>
        function factorial(){
            var n = document.getElementById("number").value;
            var f = 1;
            
            for(var i=n; i>0; i--){
                f = f * i;
            }

            return f;

        }

        function printres() {
        document.getElementById("factorial").innerHTML = factorial();
        }
    </script>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col">
                <h4>input your number here!</h4>
            </div>
            <input type="text" class="display form-control" id="number">
        </div>

        <div class="row">
            <div class="col">
                <input type="button" class="btn btn-primary" value="generate" id="generate" onclick="printres()">
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h4>here's your factorial number!</h4>
            </div>
        </div>

        <div class="row">
            <div class="card mb-4">
                <div class="card-body" id="factorial">
                </div>
        </div>

    </div>
    
</body>
</html>
