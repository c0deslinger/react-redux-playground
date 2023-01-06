import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/ducks/auth/actions';
import { compose } from "redux";
import withAuth from "../routes/hoc/withAuth";
import Catalog from '../components/modal/Catalog';
import { useState } from 'react';
import { Breadcrumb, Modal, Input } from 'antd';
import {AiOutlineLogout} from 'react-icons/ai'

const { Search } = Input;


function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  let dispatch = useDispatch();

//   <div style={{width: '100vw', height: '100vh', backgroundColor: '#ff0000'}}>
//   <h1>Dashboard</h1>
//   <button onClick={() => {
//     dispatch(logOut())
//   }}>Logout</button>
// </div>

  return (
    // <div className="bg-slate-100 w-screen h-screen flex-b">
    //   {/* sidabar */}
    //   <div className="w-10 sm:w-60 h-screen bg-slate-200 ">
    //     <div className="p-6">

    //     {/* <img src="./assets/brisma_logo.png" className='inline-block' alt="" /> */}
    //     </div>
    //   </div>
    //   {/* content */}
    //   <div className="w-screen h-screen">
    //     <div className="w-screen bg-white h-14 p-19">tes</div>
    //     <div className="m-10 p-10 mx-10 ">
    //       <div className="text-md">BRISMA Dashboard</div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex h-screen bg-gray-100">
    <div className="w-72 bg-slate-200">
      <img src="./assets/brisma_logo.png" className='p-6 w-full' alt="" />
    </div>
    <div className="h-screen min-w-max w-screen ">
      <nav className="pl-10 bg-white py-4 grid grid-cols-2">
        <Search
            placeholder="input search text"
            style={{
              width: 300,
            }}
          />
          <div className='flex mx-10 justify-end'>
            <AiOutlineLogout className='h-full' onClick={()=>{
              dispatch(logOut())
            }} />
          </div>
      </nav>
      <Breadcrumb className="mt-8 mx-10">
                <Breadcrumb.Item href="/dashboard">
                <span className="text-blue-800">BRISMA</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">Reporting</Breadcrumb.Item>
            </Breadcrumb>
      <div className="my-8 mx-10">
        <div className="bg-white rounded-md border-slate-100 border-solid shadow-sm w-full min-h-full p-10">
       
          <div onClick={()=>{setIsModalOpen(true)}} className="border hover:bg-slate-50 hover:shadow-sm border-slate-500 border-solid px-16 py-6 rounded-md">
            <div className="text-xl text-slate-800">Catalog</div>
            <div className="text-md font-light text-slate-800">Catalog Audit</div>
          </div>
        </div>
      </div>
    </div>
    <Modal width={1000} title="Catalog" open={isModalOpen} onCancel={() => {setIsModalOpen(false)} }>
        <Catalog />
      </Modal>
  </div>
  )
}

export default compose(
  withAuth,
)(DashboardPage)

