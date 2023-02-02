import React, {useState} from 'react';

const LoginUseState = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoadinge] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //ES UN BOTON DE ENVIO 
    const submit = async (e) =>{
        e.preventDefault(); //PERMITE QUE NO SE RECARGUE LA PAGINA
        setError('');   //ALMACENAMOS EL ERROR QUE NOS DE
        setIsLoadinge(true);  // CAMBIAMOS EL VALOR DE LOGEO 
        try {  //PREVENCION DE ERRORRES
            await function login ({username, password}){  //ESPERAMOS UNA RESPUESTA 
                new Promise ((resolve, reject) =>{ //RECIBIMOS una promesa el cual hay que resolver o rechazar
                    setTimeout (() =>{              //Tiempo de espera
                        if (username === 'admin' && password === 'admin'){
                        resolve();
                    } else{ 
                        reject();   
                    }
                    }, 2000) // va a esperar dos segundos 

                    
                })
            }
            setIsLoggedIn(true);
            setIsLoadinge(false);

        } catch (error) {
            //En caso de fallar mostramos el error y reseteamos todo
            setError('Username or Password is wrong');
            setIsLoadinge(false);
            setUsername('');
            setPassword('');
        }
    }


        const logout = () =>{
            setIsLoggedIn(false);
            setIsLoadinge(false);

        }
    return (
        <div className='App'>
        <div >
            {
                isLoggedIn ? (
                 <div>
                    <h1>Welcome  {username}</h1>

                    <button onClick={ logout}>
                        Log Out
                    </button>
                 </div>
                ): (
                    <form  onSubmit={submit}>
                    {
                         error && <p  style={{color: 'tomato'}}>{error}</p>
                    }
             
                    <input type ='text'
                        placeholder='Username'
                        value = {username}
                        onChange = {(e) => setUsername(e.currentTarget.value)}
                    />

                    <input type ='text'
                        placeholder='Password'
                        value = {password}
                        onChange = {(e) => setPassword(e.currentTarget.value)}
                    />
                    <br></br>
                    <button type='submit'>
                        { isLoading ? 'Loggin...' : 'Login'}
                    </button>

                    </form>
                )
            }
        </div>
            
        </div>
    );
}

export default LoginUseState;
