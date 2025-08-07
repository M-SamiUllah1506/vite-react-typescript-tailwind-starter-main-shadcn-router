// src/components/Buttons.tsx
import React from 'react';
import {
    getTodos,
    addTodo,
    updateTodo,
    removeTodo,
    getData,
    customHeaders,
    transformResponse,
    errorHandling,
    cancelToken,
} from '../app/main';

const Buttons: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-center gap-3 mt-4">
            <button
                className="bg-red-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
                onClick={getTodos}
            >
                GET
            </button>
            <button
                className="bg-green-600 hover:bg-cyan-700 text-white font-semibold px-4 py-2 rounded"
                onClick={addTodo}
            >
                POST
            </button>
            <button
                className="bg-red-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded"
                onClick={updateTodo}
            >
                PUT/PATCH
            </button>
            <button
                className="bg-yellow-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded"
                onClick={removeTodo}
            >
                DELETE
            </button>
            <button
                className="bg-blue-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded"
                onClick={getData}
            >
                Sim Requests
            </button>
            <button
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded"
                onClick={customHeaders}
            >
                Custom Headers
            </button>
            <button
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded"
                onClick={transformResponse}
            >
                Transform
            </button>
            <button
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded"
                onClick={errorHandling}
            >
                Error Handling
            </button>
            <button
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded"
                onClick={cancelToken}
            >
                Cancel
            </button>
        </div>
    );
};

export default Buttons;
