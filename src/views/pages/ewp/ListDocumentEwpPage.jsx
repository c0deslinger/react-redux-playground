import React from 'react'
import {  Button, Select } from "antd";
import { Breadcrumb, DatePicker, Input} from 'antd';
import InformationDocEwp from '../../components/document/InformationDocEwp';
import DocumentEwpTable from '../../components/table/DocumentEwpTable';
import { SearchOutlined } from '@ant-design/icons';


const ListDocumentEwpPage = () => {
  return (
    <>
        <div className="bg-gray-100 min-h-screen w-screen">
            <div className="h-16 bg-blue-50 w-full border border-b-2 border-slate-200 flex">
                <div className="text-blue-800 text-2xl font-semibold my-auto mx-8">CATALOG</div>
            </div>
            <div className="h-24 flex">
            <Breadcrumb className="my-auto mx-8">
                <Breadcrumb.Item href="/dashboard">
                <span className="text-blue-800">BRISMA</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">Catalog EWP</Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <div className="mx-8 h-40 bg-white grid grid-cols-3 py-10 px-8 gap-2 rounded-md shadow-sm">
                <Input placeholder='Nama Dokumen' />
                <DatePicker placeholder='Pilih Tanggal' />
                <div>
                    <div className="bg-blue-800 hover:bg-blue-900 cursor-pointer px-5 py-2 rounded-md inline-flex items-center">
                    <SearchOutlined className='text-white' />
                    <span className='ml-2 text-white'>Search</span>
                    </div>
                {/* <Button className='inline-block items-center bg-blue-800 text-white'><SearchOutlined /> Search</Button> */}
                </div>
                <Select
                placeholder="Sort By"
                style={{ width: '100%' }}
                    defaultValue="terbaru"
                    options={[
                        {
                        value: 'terbaru',
                        label: 'Terbaru',
                        },
                        {
                        value: 'tahun_asc',
                        label: 'Tahun Ascending',
                        },
                        {
                        value: 'tahun_desc',
                        label: 'Tahun Descending',
                        },
                        {
                        value: 'adendum_asc',
                        label: 'Adendum Ascending',
                        },
                        {
                        value: 'adendum_desc',
                        label: 'Adendum Descending',
                        },
                        {
                        value: 'triwulan_asc',
                        label: 'Triwulan Ascending',
                        },
                        {
                        value: 'triwulan_desc',
                        label: 'Triwulan Descending',
                        },
                    ]}
                    />
            </div>
            <InformationDocEwp />
            <DocumentEwpTable />
        </div>
        </>
  )
}

export default ListDocumentEwpPage