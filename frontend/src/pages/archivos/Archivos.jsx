import React from 'react';
import { useState } from 'react';
import ModalArchivo from '../../components/ModalArchivo/ModalArchivo';
import "./Archivos.css";
import Tabla from '../../components/Tabla/Tabla';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Archivos() {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
      })

    const columnas =[
        {
            field: "id",
            headerName: "ID",
            width: 100,
            editable: true,
        },
        {
            field: "tituloarchivo",
            headerName: "Titulo del archivo",
            width: 200,
            editable: true,
        },
        {
            field: "descripcionarchivo",
            headerName: "Descripcion del archivo",
            width: 250,
            editable: true,
        },
        {
            field: "idusuario",
            headerName: "Usuario",
            width: 250,
            editable: true,
        },
        {
            field: "fechasubida",
            headerName: "Fecha de subida",
            width: 250,
            editable: true,
        },
        {
            field: "horasubida",
            headerName: "Hora de subida",
            width: 250,
            editable: true,
        },
    ]

    const [filas, setFilas] = useState([])
    const [estadoModal1, cambiarEstadoModal1] = useState(false); //estado para el modal de agregar
    const [showModal, setShowModal] = useState(false);

   
    const agregarArchivo = (newFormData) => {
        setFilas([...filas, newFormData]);
        
    }; // este es el codigo de la funcion que agrega a la fila el newFormData que tiene almacenado la informacion del modal y las funciones que definimos para obtener la hora y fecha de subida del archivo

    const handleDeleteClick = (id) => {

    }
    const handleDeleteRow = (id) => {
        swalWithBootstrapButtons.fire({
          text: "Estas seguro de que deseas eliminar el Archivo?",
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Si',
          cancelButtonText: 'No',
          }).then(response => {
            if (response.isConfirmed){
            console.log("borrandofila" + id + "en Archivos");
            const nuevasFilas = filas.filter((fila) => fila.id !== id);
            setFilas(nuevasFilas);
            handleDeleteClick(id);
          }else {
            response.dismiss === Swal.DismissReason.cancel
            setFilas(filas);
        }
     })
  }

     
     
      
    return(
        <div className="contenedor-gestion">
        <div className="titulo-archivos">
            <h1>Archivos</h1>
            <hr/>
        </div>
        <div className='contenedor-busqueda'>
            <button className='boton-archivos' onClick={() => cambiarEstadoModal1(!estadoModal1)}>Agregar</button>
        </div>
        <ModalArchivo 
        estado={estadoModal1} 
        cambiarEstado={cambiarEstadoModal1}
        subir={agregarArchivo}
        />
        
        <Tabla columns={columnas} rows={filas} actions  handleDeleteRow = {handleDeleteRow}/>
        </div>
    )
}

export default Archivos;