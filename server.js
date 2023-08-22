//importa express y faker
const express = require("express");
const app = express();

const {faker} = require('@faker-js/faker');

class Usuario {
    constructor(){
        this._id = faker.string.uuid(),
        this.nombre = faker.person.firstName(),
        this.apellido = faker.person.lastName(),
        this.telefono = faker.phone.number(),
        this.email = faker.internet.email(),
        this.password = faker.internet.password()
    }
}

class Empresa {
    constructor(){
        this._id = faker.string.uuid(),
        this.nombre = faker.company.name(),
        this.direccion = {
            calle: faker.location.street(),
            ciudad: faker.location.city(),
            estado: faker.location.state(),
            cp: faker.location.zipCode(),
            pais: faker.location.country()
        }
    }
}

app.get("/api/users/new", (req, res) =>{
    let nuevoUsuario = new Usuario();
    res.json(nuevoUsuario);
})

app.get("/api/companies/new", (req,res) =>{
    let nuevaEmpresa = new Empresa;
    res.json(nuevaEmpresa);
})

app.get("/api/user/company", (req,res) =>{
    let nuevoUsuario = new Usuario;
    let nuevaEmpresa = new Empresa;
    let nuevoUsuarioYEmpresa = [nuevoUsuario,nuevaEmpresa]
    res.json(nuevoUsuarioYEmpresa);
})


app.listen(8000, () => console.log("Servidor corriendo"));