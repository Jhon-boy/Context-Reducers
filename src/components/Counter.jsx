import React ,{useContext, useReducer}from 'react';


//TENEMOS MIS 3 CONSTANTES
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const  myContext = React.createContext(null);

const Points = () =>{
    const state = useContext(myContext);
    return (
        <p>  Points: {state.count}</p>
    )

}

const Counter = () => {

    //todos los reducer tiene un estado inicial
    //initial State para el reducer

    const initialState = {
        count: 0 //valro incial 

    }

    //Reducer to change State

    //ESCUCHA ACCIONES Y EJECUTA LAS OPERACIONES
    const reducer = (state, action)  =>{

        switch (action.type) {
            case INCREMENT:
                return {
                    
                    count: state.count + action.payload.quantity
                }
        case DECREMENT:
                return {
                        
                        count: state.count - action.payload.quantity 
                    }
         case RESET:
                return {
                            
                    count: 0
                }
            default:
                return state;
        }
    }

    //Asing UseReducr to state and dispatch action
//ESTADO Y EL DISPACTCH 
    const [state, dispatch] = useReducer(reducer, initialState)



    return (
        <myContext.Provider  value = {state}>
             <div>
             
           <Points />
            <br></br>
            <button onClick={
                //LLAMADO DE LA APLICACION 
                () =>{
                    dispatch({
                        type: 'INCREMENT',
                        payload : {
                            quantity : 1
                        }
                        })
                }
            }>
                INCREMENT
            </button>

            <button onClick={
                //LLAMADO DE LA APLICACION 
                () =>{
                    dispatch({
                        type: 'DECREMENT',
                        payload : {
                            quantity : 1
                        }
                        })
                }
            }>
                DECREMENT
            </button>

            <button onClick={
                //LLAMADO DE LA APLICACION 
                () =>{
                    dispatch({
                        type: 'RESET'
                        })
                }
            }>
               RESET COUNTER
            </button>

        </div>
        </myContext.Provider>
       
    );
}

export default Counter;
