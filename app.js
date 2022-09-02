//const express = require('express')FORMA VIEJA DE IMPORTAR
import express from 'express'

//traigo libreria que controla variables de entorno
import * as dotenv from 'dotenv'
dotenv.config()
console.log(process.env.PORT)

//app Es la variable que almacena todas las funcionalidades de express
const app = express()


//ATENDIENDO PETICIONES Y RESPONDIENDO

//1. PETICION DE TIPO GET
app.get('/hoteles/habitaciones', function (req, res) {
    res.send('Estoy buscando habitacion')
})

//2.PETICION DE TIPO GET para buscar habitaciones por ID
app.get('/hoteles/habitacion/:id', function (req, res) {
    res.send('Estoy buscando habitacion por ID')
})

//3.Peticion de tipo POST para agregar habitacion en BD
app.post('/hoteles/habitacion', function (req, res) {
    res.send('Estoy agregando una habitacion')
})

//4. PETICION DE TIPO PUT para editar una habitacion
app.put('/hoteles/modificarhabitacion', function (req, res) {
    res.send('Estoy actulizando una aplicacion')
})



//ENCENDIENDO EL SERVIDOR EN EL PUERTO 3000
app.listen(process.env.PORT,function(){
    console.log("SERVIDOR ENCENDIDO")
})