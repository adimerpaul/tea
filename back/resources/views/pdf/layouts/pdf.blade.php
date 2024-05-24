<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Abordaje</title>
    <style>
        *{
            font-family: Calibri;
        }
        .center {
            text-align: center;
        }
        .h6 {
            font-size: 10px;
        }
        .h5 {
            font-size: 12px;
        }
        .h4 {
            font-size: 14px;
        }
        .h3 {
            font-size: 16px;
        }
        .h2 {
            font-size: 18px;
        }
        .h1 {
            font-size: 20px;
        }
        .bold {
            font-weight: bold;
        }
        .mt-1 {
            margin-top: 5px;
        }
        .mt-2 {
            margin-top: 10px;
        }
        .mt-3 {
            margin-top: 15px;
        }
        .mt-4 {
            margin-top: 20px;
        }
        .mt-5 {
            margin-top: 25px;
        }
        .w-100 {
            width: 100%;
        }
        .w-50 {
            width: 50%;
        }
        .w-25 {
            width: 25%;
        }

    </style>
</head>
<body>
<div style="text-align: right;font-size: 10px;">
    {{$document->date}}
    <br>
    {{$user->name}}
</div>
@yield('content')
</body>
</html>
