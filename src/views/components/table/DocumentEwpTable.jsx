import React from 'react';
import { Button, Table, Modal } from 'antd';
import { useState } from 'react'
import HistoryDownloadModal from '../modal/HistoryDownloadModal';


function DocumentEwpTable() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      width: 20
    },
    {
      title: 'Dokumen',
      dataIndex: 'document',
      key: 'document',
      fixed: 'left',
      filterSearch: true,
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
      title: 'Tanggal',
      dataIndex: 'tanggal',
      key: 'tanggal',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'John',
          value: 'John',
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
      title: 'Lampiran',
      dataIndex: 'lampiran',
      key: 'lampiran',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      fixed: 'right',
      width: 30,
      render: () => <div className='flex gap-2'>
        <Button className='bg-blue-800 text-white hover:bg-blue-900 hover:text-white border' 
          onClick={()=>{setIsModalOpen(true)}}> History </Button>
        <Button className='bg-blue-800 text-white hover:bg-blue-900 hover:text-white'>Preview</Button>
        <Button className='bg-blue-800 text-white hover:bg-blue-900 hover:text-white'>Download</Button>
      </div>
    },
  ];
  const data = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      no: i+1,
      document: 'Dokumen nomor xx-'+i,
      tanggal: '10 Dec 2022',
      lampiran: 'doc_94_929.file'
    });
  }

  return (<>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        size="middle"
        className='mx-8 my-4'
      />
      
    <Modal width={1000}  title={<span style={{color: 'rgb(59 130 246 / 1)', fontWeight: 300, fontSize: '1.5rem'}}>Catalog</span>} open={isModalOpen} onCancel={() => {setIsModalOpen(false)}} footer={null}>
      <hr/>
      <HistoryDownloadModal />
    </Modal>
  </>)
}
export default DocumentEwpTable;