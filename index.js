const express = require('express');
const {clientes, proveedores} = require("./axios")
const http = require('http')

// Crea una nueva instancia del servidor
http
  .createServer(function (req, res) {
    // Encabezado de la respuesta por defecto del servidor
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Podemos consultar la url del request
    console.log('url', req.url)
    var txt = '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"><title>Tarea Node</title> </head> <body><h1>Lista de Clientes</h1><table class="table table-striped"> <thead><tr><th scope="col" class="col-2">ID cliente</th><th scope="col" class="col-5">Nombre compañía</th> <th scope="col" class="col-5">Nombre contacto</th></tr></thead> <tbody>'
    var txtP = '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"><title>Tarea Node</title> </head> <body><h1>Lista de Proveedores</h1><table class="table table-striped"> <thead><tr><th scope="col" class="col-2">ID proveedor</th><th scope="col" class="col-5">Nombre compañía</th> <th scope="col" class="col-5">Nombre contacto</th></tr></thead> <tbody>'

    
    var txt2 = '</tbody></table></body></html>'
    // Respuesta según el content-type

    if(req.url === '/api/clientes')
    {
        var txtClientes = '';
        clientes.forEach(element => {
        txtClientes+= '<tr><td>'+ element.idCliente + '</td><td>'+element.nombreCompania+ '</td><td>'+ element.nombreContacto + '</td></tr>'
        
        });
        res.end(txt + txtClientes + txt2);
    }
    else if(req.url === '/api/proveedores')
    {
        var txtProveedores = '';
        proveedores.forEach(element => {
        txtProveedores+= '<tr><td>'+ element.idproveedor + '</td><td>'+element.nombrecompania+ '</td><td>'+ element.nombrecontacto + '</td></tr>'
        
        });
        res.end(txtP + txtProveedores + txt2);
    }
    
  })
  .listen(8081); // Puerto que usará el servidor para escuchar las solicitudes