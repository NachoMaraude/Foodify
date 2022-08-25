import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { dishId } from '../../../../Reducer/menuSlice';
import { useParams } from 'react-router-dom'
import { getTable, putTable } from '../../Reducer/menuSlice';
import { tableId } from '../../Reducer/menuActions';
// import logo from '../../../../utils/LogoMain.png'
const Swal = require('sweetalert2')

function EditTable() {

  const dispatch = useDispatch()
  const { id } = useParams()
  const table = useSelector(state => state.table.dish)
  
  localStorage.setItem('tableID', id)

  useEffect(() => {
    dispatch(tableId(id))
  }, [dispatch])
  const [input, setInput] = useState({
    table_number: '',
    max_capacity: 0,
    actual_state: '',
  });
    

  const handleLoad=(e)=>{
    setInput({
      table_number: table.table_number,
      max_capacity: table.max_capacity,
      actual_state: table.actual_state,
      
    })
  }

  const handleSubmit=(e)=> {
    e.preventDefault();
    // if(dishes.map(e => e.name.toLowerCase() === input.name.toLowerCase())) return alert('The name already exist!')
    // if(!input.name) return alert('Falta ingresar nombre')
    // if(!input.description) return alert('Falta ingresar descripcion')
    // if(!input.price) return alert('Falta ingresar precio')
    // if(input.price < 0) return alert('El valor debe ser mayor a 0')
    // if(input.rating < 0 || input.rating > 5) return alert('El valor debe ser mayor a 0 o menor a 5')
    // if(input.image && input.image.slice(0,8) !== 'https://') return alert('Ingrese una URL valida')
    dispatch(putTable(input))

    // alert('Table modificated!!')
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Table modificateddddd!',
      showConfirmButton: false,
      timer: 1500,
      background:'#f5f3f3'
    })
    // setInput(clean)
    // window.location.href = "foodify-ten.vercel.app/menu";
  }
  function handleChange(e) {

    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    // setErrors(validate({
    //     ...input,
    //     [e.target.name] : e.target.value
    // }))
  };

//   function handleSelect(e) {
//         if (!input.category.includes(e.target.value)) {
//           setInput({
//             ...input,
//             category: [...input.category, e.target.value]
//           })
//         } else return alert('Esa categories ya fue seleccionada')
//       logo=false
    
//   }
  
  // function handleReset(e) {
  //   setInput(clean)
  //   // setErrors('')
  // }

//   function handleDelete(e) {
//     setInput({
//       ...input,
//       category: input.category.filter(g => g !== e)
//     })
//   }

  return (

    <div className='w-screen h-screen grid justify-items-center items-center content-center'>
      <div>
        <div>
        <div>
                <h1 className="sm: w-full flex justify-center outline-none text-lg p-2 rounded  bg-orange-300">Edit Table</h1>
              </div>
            <div>
              <button onClick={handleLoad}>Cargar mesa seleccionada</button>
            </div>
          <form className='grid grid-cols-2 gap-4 p-5 justify-items-center' onSubmit={handleSubmit}>
            <div >
              
              <div>
                <label>Table number</label>
              </div>

              <input
                className='w-72 text-lg bg-transparent rounded outline-none placeholder:text-gray-400  text-textColor'
                // placeholder={dishes.name}
                type="text"
                name="name"
                value={input.table_number}
                onChange={handleChange}
              />

            </div>
            {/* <div className='grid content-around h-full'>

              <div>
                <select
                  name="category" className='p-2 w-72 outline-none  text-base border-b-2 border-gray-200 md:mt-2 rounded-md cursor-pointer bg-gray-50 text-textColor' onChange={(e) => handleSelect(e)}>
                    <option value="other" className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out bg-gray-50 text-gray-400 text-base">
              Select Category
            </option>
                  {categories.map((g, i) => (
                    <option key={i} value={g}>{g}</option>
                  ))}
                </select>
              </div>

            </div> */}
            <div>
              <div>
                <label>Maximum capacity</label>
              </div>
              <input
                className='w-72 text-lg bg-transparent rounded outline-none placeholder:text-gray-400 text-textColor'
                // placeholder={dishes.rating}
                type="number"
                name="max_capacity"
                value={input.max_capacity}
                min='0'
                max='5'
                step='1'
                onChange={handleChange}
              />

            </div>
            <div>

              <div>
                <label>Actual state</label>
              </div>
              <input
                className='w-72 text-lg bg-transparent rounded outline-none placeholder:text-gray-400 text-textColor'
                // placeholder={dishes.price}
                type="text"
                name="actual_state"
                value={input.actual_state}
                onChange={handleChange}
              />

            </div>
            {/* <div className='grid justify-center'>
              <div className='flex justify-center'>
                <label>Description</label>
              </div>
              <textarea
                className='flex justify-center w-72 m-3 rounded text-lg bg-transparent placeholder:text-gray-400 text-textColor'
                // placeholder={dishes.description}
                type="text" name="description"
                value={input.description}
                onChange={handleChange}
              />

            </div> */}
            {/* <div>
            
            {logo===false? input.category.map((e, i) =>
              <div key={i}>
                <p className="">{e}</p>
                <div>
                  <button onClick={() => handleDelete(e)}>x</button>
                </div></div>
            )
            :
            <img src={logo} className="object-cover w-40 -my-6" alt="logo" />
            }
            </div> */}
            <div className='w-full h-full flex justify-center'>
        <button className=' bg-orange-500 hover:bg-orange-600  rounded p-2 focus:outline-none '>Submit</button>

      </div>

          </form>
          
          

        </div>
      </div>
      
    </div>
  )
}

export default EditTable