import React from "react";
import { useState } from "react";

export const Counter = () => {
    // let count = 0;

    // function addOneToCount(event){
    //     console.log("adding one to count!", event, count);
    //     count = count +1;
    //     console.log(event);
    //     console.log(count);
    // }

    const [count, setCount] = useState(0);
    const [superVariable, setSuperVariable] = useState(0);
    
    return (
        <div className="text-center">
			<h1 className="text-center mt-5">This is current count: {count}</h1>
            
            <button 
                //onClick={(event) => addOneToCount(event)}
                onClick={(event) => setCount(count + 1)}
                //onClick={setCount(count + 1)}
                //onClick={addOneToCount}
                className="btn btn-primary">
                Add one to count
            </button>

        </div>
    );
};