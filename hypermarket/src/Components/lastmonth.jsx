import React from 'react';


function subtotal(items) {
    let arr=items.map(({ products }) => products).filter(i=>i.name===i.name)
    alert(arr)
    for(let i=0;i<arr.length;i++)
    return arr.map(({ quantity }) => quantity)
  }


const Lastmonth = () => {
    const[orders,setorders]=React.useState([])




    return ( 
    <>
   <h5>{subtotal(orders)}</h5> 

    </>
    );
}
 
export default Lastmonth;