import React from 'react';
import { Button, Table } from 'antd';

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
      <Button className='bg-blue-800 text-white hover:bg-blue-900 hover:text-white'>History</Button>
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
const DocumentEwpTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    size="middle"
    className='mx-8 my-4'
    // scroll={{
    //     x: 1500,
    //     y: 300,
    //   }}
    // scroll={{
    //   x: 'calc(700px + 50%)',
    //   y: 240,
    // }}
  />
);
export default DocumentEwpTable;