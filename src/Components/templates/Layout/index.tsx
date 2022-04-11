import React from 'react'
const Layout:React.FC<any>=({children})=>{
    const customStyles={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'1100px',
        height:'100vh'
    }
    return(
        <div className="mx-auto" style={customStyles}>
            {children}
        </div>
    )

}
export default Layout