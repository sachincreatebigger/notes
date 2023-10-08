import { useEffect, useState } from 'react';
import './App.css';

function local(){
let c=localStorage.getItem('lists')
if(c){
return JSON.parse(localStorage.getItem('lists'));
}
else{

  return[];
}

}
function App() {
let[data,setdata]=useState("")
let[ata,setata]=useState(local())

useEffect(()=>{
localStorage.setItem('lists',JSON.stringify(ata))

},[ata])

function Abc(e){
setdata(e.target.value)



}
function Bcd(){
{
if(data==''){

  alert("WRITE SOMETHING")
}
else{
  setata([...ata,data])

}


}

setdata([])

}

let Kcd=()=>{

  setata([])


}
function Lok(id){

let you=ata.filter((e,ind)=>{

  return ind!=id;
})
setata(you)
}
 return(
<>

<div className='a'><img src='p.png' className='k' alt='k' />

<input type='text'  placeholder='Add notes' onChange={Abc} value={data}/>
<button className='b' onClick={Bcd}>+</button >

{
ata.map((e,ind)=><div className='lo'><p>{ind}){e}</p>
<i class="fa fa-trash-o" onClick={()=>Lok(ind)}></i></div>
)

}
<button onClick={Kcd}>Clear</button>
</div>


  </>
  )}
export default App;
