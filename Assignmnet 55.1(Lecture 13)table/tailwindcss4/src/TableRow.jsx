import React from 'react';

function TableRow({number,index}){
    return(
        <div className="text-indigo-700 pb-6 text-3xl">
            {number}*{index}={number*index}
        </div>
    )
}
export default TableRow;