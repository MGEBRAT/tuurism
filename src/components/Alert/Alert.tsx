import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

  const Alert = () => {
  const [name , setName] = useState();
  const [famy , setFamy] = useState();
  const [number , setNumber] = useState();
  const [ formField, setFormField] = useState(false);
  
  useEffect(() =>{
    if ( name && famy && number) {
      setFormField(true);
    } else {
      setFormField(false);
    }
    
  }, [ name, famy, number]);

  const saveFields = () => {
    const data = {
      data: {
        name: name,
        famy: famy,
        number: number
      }
    }
    
  GlobalApi.createOrder(data).then(resp => { 
    console.log(resp);
    if (resp) {
      alert("данные") ;
    }
  })
  }


  return (
    <section className='w-full p-2 ' id='about'>
    <div className=' container mx-auto h-full bg-cover rounded-[5px] '>
        <h2 className="text-black text-8xl font-bold">Alert</h2>
        <div  className='mt-5 flex justify-center items-center flex-col gap-20px '>
            <input onChange={(e) => setName(e.target.value) } className='mt-[20px] w-[300px] h-[40px] rounded-full  text-black p-[20px] ' type="text" placeholder='Имя' />
            <input onChange={(e) => setFamy(e.target.value) } className='mt-[20px] w-[300px] h-[40px] rounded-full  text-black p-[20px] ' type="text" placeholder='Фамилия' />
            <input onChange={(e) => setNumber(e.target.value) } className='mt-[20px] w-[300px] h-[40px] rounded-full  text-black p-[20px] ' type="phone" placeholder='Номер' />
            <button disabled={!formField} onClick={() => saveFields()} className=' w-[200px] h-[40px] bg-white text-2xl text-black font-normal rounded-full mt-[20px]'>Отправить</button>
        </div>
    </div>
  </section>
  )
}

export default Alert