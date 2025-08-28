import React from 'react';
import { LiaSpinnerSolid } from "react-icons/lia";
function Loading(){
    return (
        <div className="animate-spin text-2xl flex justify-center items-center">
            <LiaSpinnerSolid />
        </div>
    )
}

export default Loading;