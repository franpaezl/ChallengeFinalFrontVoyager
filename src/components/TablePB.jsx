// import React, { useState } from 'react'
// import './TablePB.css'

// function TablePB() {
//     const [table1, setTable1] = useState('')
//   return (
//     <div>
//         <div className='flex flex-row justify-center'>
//             <div className='bgTablePB border border-red-600 h-[95vh] w-[820px]'>
//                 <button>
//                   <div className='bg-[#00000077] border-2 border-green-500 relative top-[45px] left-[60px] w-[100px] h-[95px] rounded-[100px] hover:bg-white'>
//                     <div className='w-full h-full flex flex-col justify-center items-center'>
//                         <h1 className='font-bold'>Table for 4</h1>
//                         <h1 className='text-[14px] text-[green]'>Available</h1>
//                     </div>
//                   </div>
//                 </button>
//                 <div className='bg-[#00000077] border-2 border-green-500 relative top-[110px] left-[111px] w-[140px] h-[110px] rounded-[100px] hover:bg-[white]'>
//                     <button className='w-full h-full'>
//                         <div className='w-full h-full flex flex-col justify-center items-center'>
//                             <h1 className='font-bold'>Table for 4</h1>
//                             <h1 className='text-[20px] font-bold text-[red]'>Reserved</h1>
//                         </div>
//                     </button>
//                 </div>
//                 <div className='bg-[#00000077] border-2 border-green-500 relative top-[113px] left-[90px] w-[130px] h-[95px] rounded-[100px]'></div>
//                 <div className='bg-[#00000077] border-2 border-green-500 relative top-[17px] left-[580px] w-[130px] h-[95px] rounded-[100px]'></div>
//                 <div className='bg-[#00000077] border-2 border-green-500 relative top-[-189px] left-[572px] w-[130px] h-[95px] rounded-[100px]'></div>
//                 <div className='bg-[#00000077] border-2 border-green-500 relative top-[65px] left-[135px] w-[130px] h-[85px] rounded-[100px]'></div>
//                 <div className='bg-[#00000077] border-2 border-green-500 relative top-[-160px] left-[146px] w-[110px] h-[90px] rounded-[100px]'></div>
//                 <div className='bg-[#00000077] border-2 border-green-500 relative top-[-180px] left-[47px] w-[130px] h-[85px] rounded-[100px]'></div>
//                 <div className='bg-[#00000077] border-2 border-green-500 relative top-[-265px] left-[218px] w-[130px] h-[85px] rounded-[100px]'></div>
//                 <div className='bg-[#00000077] border-2 border-green-500 relative top-[-279px] left-[552px] w-[110px] h-[85px] rounded-[100px]'></div>
//                 <div className='bg-[#00000077] border-2 border-green-500 relative top-[-438px] left-[631px] w-[120px] h-[90px] rounded-[100px]'></div>
//                 <div className='bg-[#00000077] border-2 border-green-500 relative top-[-526px] left-[472px] w-[120px] h-[90px] rounded-[100px]'></div>
//                 <div className='bg-[#00000077] border-2 border-green-500 relative top-[-686px] left-[550px] w-[120px] h-[90px] rounded-[100px]'></div>
//                 <div className='bg-[#00000077] border-2 border-green-500 relative top-[-1091px] left-[204px] w-[170px] h-[110px] rounded-[30px]'></div>
//                 <div className='bg-[#00000077] border-2 border-green-500 relative top-[-1191px] left-[539px] w-[170px] h-[90px] rounded-[30px]'></div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default TablePB


import React, { useState } from 'react'
import './TablePB.css'

function TablePB() {
    const [table1, setTable1] = useState('')
  return (
    <div>
        <div className='flex flex-row justify-center'>
            <div className='bgTablePB border border-red-600 relative h-[95vh] w-[820px]'>
                <button>
                  <div className='bg-[#00000077] border-2 border-green-500 absolute top-[7%] left-[7%] w-[13%] h-[13%] rounded-[100px] hover:bg-white'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <h1 className='font-bold'>Table for 4</h1>
                        <h1 className='text-[14px] text-[green]'>Available</h1>
                    </div>
                  </div>
                </button>
                <div className='bg-[#00000077] border-2 border-green-500 absolute top-[30%] left-[14%] w-[17%] h-[15%] rounded-[100px] hover:bg-[white]'>
                    <button className='w-full h-full'>
                        <div className='w-full h-full flex flex-col justify-center items-center'>
                            <h1 className='font-bold'>Table for 4</h1>
                            <h1 className='text-[20px] font-bold text-[red]'>Reserved</h1>
                        </div>
                    </button>
                </div>


                <div className='bg-[#00000077] border-2 border-green-500 absolute top-[45%] left-[11%] w-[16%] h-[16%] rounded-[100px]'>
                <button className='w-full h-full'>
                        <div className='w-full h-full flex flex-col justify-center items-center'>
                            <h1 className='font-bold'>Table for 4</h1>
                            <h1 className='text-[16px] font-bold text-[red]'>Reserved</h1>
                        </div>
                    </button>    
                </div>


                <div className='bg-[#00000077] border-2 border-green-500 absolute top-[15%] left-[64%] w-[24%] h-[15%] rounded-[100px]'></div>
                {/* <div className='bg-[#00000077] border-2 border-green-500 relative top-[-189px] left-[572px] w-[130px] h-[95px] rounded-[100px]'></div>
                <div className='bg-[#00000077] border-2 border-green-500 relative top-[65px] left-[135px] w-[130px] h-[85px] rounded-[100px]'></div>
                <div className='bg-[#00000077] border-2 border-green-500 relative top-[-160px] left-[146px] w-[110px] h-[90px] rounded-[100px]'></div>
                <div className='bg-[#00000077] border-2 border-green-500 relative top-[-180px] left-[47px] w-[130px] h-[85px] rounded-[100px]'></div>
                <div className='bg-[#00000077] border-2 border-green-500 relative top-[-265px] left-[218px] w-[130px] h-[85px] rounded-[100px]'></div>
                <div className='bg-[#00000077] border-2 border-green-500 relative top-[-279px] left-[552px] w-[110px] h-[85px] rounded-[100px]'></div>
                <div className='bg-[#00000077] border-2 border-green-500 relative top-[-438px] left-[631px] w-[120px] h-[90px] rounded-[100px]'></div>
                <div className='bg-[#00000077] border-2 border-green-500 relative top-[-526px] left-[472px] w-[120px] h-[90px] rounded-[100px]'></div>
                <div className='bg-[#00000077] border-2 border-green-500 relative top-[-686px] left-[550px] w-[120px] h-[90px] rounded-[100px]'></div>
                <div className='bg-[#00000077] border-2 border-green-500 relative top-[-1091px] left-[204px] w-[170px] h-[110px] rounded-[30px]'></div>
                <div className='bg-[#00000077] border-2 border-green-500 relative top-[-1191px] left-[539px] w-[170px] h-[90px] rounded-[30px]'></div> */}
            </div>
        </div>
    </div>
  )
}

export default TablePB


