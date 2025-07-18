import React,{useState} from 'react';
import TableRow from './TableRow.jsx';

// let nums=2; YAHA LIKH RAHE THE TOH DONO TABLE FUNCTION KI VALUE JAHA CHODTE THE WAHA SE INCREASE HONA START HOTI THI
function Table(){
    // let nums=2; or agar yaha likhte the toh function increase hone ke bd same value ko hi reassign kr leta tha
    // So, best way to tackle it to use useState funtion 
    console.log("tableRow is running");
    // kiska table
    const [nums,updatedNum]=useState(2);
    // kaha tk
    // const [upto,setUpto]=useState(10);
    
    // or
    // const state=useState(2);
    // const nums=state[0];
    // const updatedNum=state[1];

        function nextTable(event){
        console.log("nextTable called");
        // const newNums=+event.target.value;
        // updatedNum(newNums);
        updatedNum(nums+1);
    }

    // function uptoTable(event){
    //     console.log("upto table is working");
    //     const newNum=+event.target.value;
    //     setUpto(newNum);
    // }
     
    return (
        <div className="p-2">
            <button onClick={nextTable} className="bg-indigo-700 border rounded-lg text-white p-3 flex ">Next</button>
            {/* <div className="flex flex-col pb-4">
            <input onChange={nextTable} value={nums} className="border border-black text-black rounded-lg"/>
            <input onChange={uptoTable} value={upto} className="border border-black text-black rounded-lg"/>
            </div> */}
            <div> 
                <TableRow number={nums} index={1}></TableRow>
                <TableRow number={nums} index={2}></TableRow>
                <TableRow number={nums} index={3}></TableRow>
                <TableRow number={nums} index={4}></TableRow>
            </div>
        </div>    
        
    )
}
export default Table;