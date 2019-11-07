import React from "react";

const title={
  margin:40
}
export default function Alarm() {

  return <h2 style={title}>Alarm</h2>;
}
// import React from 'react'


// export default function Alarm() {
// class Alarm extends Component{
//   constructor(){
//     super();
//     //new Date(yr,month,day,hr,min,sec,milsec)
//     this.state={
//       dateTime: new Date (2019, 11, 07)
//     }
//   }

//   componentDidMount(){
//     setInterval(()=>{
//       //check if time now is time of slasm
//       if(new Date() >this.state.dateTime){
//         //show message, end alarm (clear interval)
//       }
//     },1000)
//   }

//   render(){
//     return{
//       <>
//       <h1>Alarm</h1>
//       </>
//     }
//   }
// }
