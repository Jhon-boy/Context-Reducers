import React, {useState} from 'react';

const ContextTask = () => {

    const [tarea, setTarea] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [error, setError] = useState('');
    const [activo, setActivo] = useState(false);

    const submit = async (e) =>{
        e.preventDefault(); //PERMITE QUE NO SE RECARGUE LA PAGINA
        setError('');   //ALMACENAMOS EL ERROR QUE NOS DE

        try {
            await function agregar ({tarea, descripcion}){  //ESPERAMOS UNA RESPUESTA 
                new Promise ((resolve, reject) =>{ //RECIBIMOS una promesa el cual hay que resolver o rechazar
                    setTimeout (() =>{              //Tiempo de espera
                        if (tarea === 'admin' && descripcion === 'admin'){
                        resolve();
                    } else{ 
                        reject();   
                    }
                    }, 2000) // va a esperar dos segundos 

                    
                })
            }
            setActivo(true);
        } catch (error) {
            setError('tarea or descripcion is wrong');
            setTarea('');
            setDescripcion('');
        }
    
    }
    const eliminar =  () => {
        setTarea('');
        setDescripcion('');
        setActivo(false);

    }

    return (
        <div>
            <div className='Mostar'>
                <table className='table table-dark table-striped-columns'>
                 <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tarea</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Aciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{tarea}</td>
                    <td>{descripcion}</td>
                    <td>{activo ? (<i className="bi bi-trash-fill"></i>) : (<i className="bi bi-trash-fill"></i>)}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className='Agregar'>
            <center>USE CONTEXT</center>
                <form onSubmit={submit}>
                <div className="mb-1">
                     <input 
                        className='form-control'
                        type ='text'
                        placeholder='Tarea'
                        value = {tarea}
                        onChange = {(e) => setDescripcion(e.currentTarget.value)}
                />
                </div>
               
               <div className="mb-1">
                  <input 
                        className='form-control'
                         type ='text'
                        placeholder='Descripcion'
                        value = {activo}
                        onChange = {(e) => setDescripcion(e.currentTarget.value)}
                />
               </div>
               <div className="mb-1">
                  <input 
                        className='form-control'
                         type ='text'
                        placeholder='Descripcion'
                        value = {descripcion}
                        onChange = {(e) => setDescripcion(e.currentTarget.value)}
                />
               </div>
              
               <button type='submit'>
                    Agregar
                    </button>

                </form>
            </div>
        </div>
    );
}

export default ContextTask;
