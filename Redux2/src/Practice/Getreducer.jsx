import axios from 'axios';

export const  get =() =>(dispatch)=> {

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        dispatch({
            type: 'ADD',
            payload:res.data 
        });
    })
};

export const  post =(data) =>(dispatch)=> {

    axios.post('https://jsonplaceholder.typicode.com/users', data)
    .then(res => {
        dispatch({
            type: 'SUB',
            payload:res.data 
        });
    })
};


export const  del = (id) =>(dispatch)=> {

    axios.delete(`https://jsonplaceholder.typicode.com/users${id}`)
    .then(res => {
        dispatch({
            type: 'DEL',
            payload:res.data 
        });
    })
};


let initialState={
    user:[]
}

export const Getreducer = (state=initialState,action)=> {

    switch(action.type) {
        case 'ADD' : 
        return {
            ...state,
               user:action.payload
        };

        default:
            return state;
    }

}

