const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.listen(3006, ()=>{
    console.log('El servidor esta encendido')
})

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database: 'administracion'
})

app.get('/', (req, res)=>{
    db.query('select * from cliente',
    (err,result)=>{
        if(err)console.log(err)
        else{
            res.send(result)
            console.log("Metodo GET", result)
        }
    })
})

app.post('/crear', (req,res)=>{
    const ID = req.body.ID;
    const nombre = req.body.nombre;
    const  Primer_Apellido = req.body.Primer_Apellido;
    const Telefono =req.body.Telefono;
    const Nombre_Mascota =req.body.Nombre_Mascota;
    const Direccion =req.body.Direccion;
    
    db.query('INSERT INTO cliente VALUES (?,?,?,?,?,? )',[ID, nombre, Primer_Apellido, Telefono,Nombre_Mascota,Direccion]),
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("El cliente se registro")
            console.log("El cliente se registro", result)
        }
    }
})

app.put('/edit',(req,res)=>{
    const ID = req.body.ID;
    const nombre = req.body.nombre;
    const  Primer_Apellido = req.body.Primer_Apellido;
    const Telefono =req.body.Telefono;
    const Nombre_Mascota =req.body.Nombre_Mascota;
    const Direccion =req.body.Direccion;

    db.query('UPDATE cliente SET Nombre=?,Primer_Apellido=?,Telefono=?,Nombre_Mascota=?,Direccion=? WHERE ID=?',[nombre, Primer_Apellido, Telefono,Nombre_Mascota,Direccion,ID]),
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("El cliente se actualizo",result)
            console.log("El cliente se actualizo", result)
        }
    }
})

app.delete('/delete/:ID',(req,res)=>{
    const ID = req.body.ID;

    db.query('DELETE FROM cliente WHERE ID=?',ID),
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("Eliminar",result)
            console.log("El cliente a sido elimino", result)
        }
    }
})