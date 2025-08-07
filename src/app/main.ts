// src/api/main.ts

import axios from "axios";

export function getTodos() {
    // axios({
    //     method: 'get',
    //     url: 'https://jsonplaceholder.typicode.com/posts',
    //     params: {
    //         _limit: 5 //limit set by that
    //     }
    // })
    //     .then(res => console.log(res.data))
    //     .catch(err => console.error(err))

    axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _limit: 5,
        }
    })
        .then(res => console.log(res))
        .catch(err => console.error(err))
}


export function addTodo() {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'New Todo',
            completed: false
        }
    })
        .then(res => console.log(res))
}

export function updateTodo() {
    axios.patch('https://jsonplaceholder.typicode.com/posts/100',
        {
            title: 'update True',
            completed: true
        }
    )
        .then(res => console.log(res));

}

export function removeTodo() {
    console.log('DELETE Request');
}

export function getData() {
    console.log('Simultaneous Request');
}

export function customHeaders() {
    console.log('Custom Headers');
}

export function transformResponse() {
    console.log('Transform Response');
}

export function errorHandling() {
    console.log('Error Handling');
}

export function cancelToken() {
    console.log('Cancel Token');
}
function showOutput(data: any): any {
    throw new Error("Function not implemented.");
}



