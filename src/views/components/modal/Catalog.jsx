import React from 'react'
import {useNavigate } from 'react-router';

function Card (props) {

    let navigate = useNavigate();
    
    return <div className="hover:shadow-xl w-72 h-72 border-solid border border-blue-800 rounded-xl p-19"
    onClick={()=>{
        navigate('/catalog')
    }}
    >
        <div className="border border-blue-800 px-5 py-2 inline-block m-5 text-blue-800">{props.title}</div>
        <div className="m-5 font-light text-slate-600">{props.desc}</div>
    </div>
}

const Catalog = () => {
  return (
    // <div className="bg-white rounded border border-slate-200 border-solid">
    //     <div className="p-5 w-full flex">
    //         <span className='text-lg font-light text-blue-800 float-left'>Catalog</span>
    //         {/* <span className='text-lg font-light text-slate-500 float-left'>X</span> */}
    //     </div>
    //         <hr />
    //         <div className="p-5 pt-20">
    //             <div className="text-xl my-5 text-blue-800 font-semibold">Pilih Jenis Projek</div>
    //             <div className="grid grid-cols-3 ">
    //                 <Card title="PAT" desc="Perencanaan"/>
    //                 <Card title="EWP" desc="Pelaksanaan"/>
    //                 <Card title="RPM"desc="Monitoring"/>
    //             </div>
    //         </div>

    // </div>
    <div className="">
                <div className="text-xl mt-20 my-5 text-blue-900 font-semibold">Pilih Jenis Projek</div>
                <div className="grid grid-cols-3 ">
                    <Card title="PAT" desc="Perencanaan"/>
                    <Card title="EWP" desc="Pelaksanaan"/>
                    <Card title="RPM"desc="Monitoring"/>
                </div>
            </div>
  )
}

export default Catalog