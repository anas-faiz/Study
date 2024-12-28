import React from "react";

export default function signinlay({children}:{children:React.ReactNode}){
    return(
        <div>
            <div className="p-1 text-center">
                20% off
            </div>
            {children}
        </div>
    )
}