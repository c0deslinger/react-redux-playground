import React from 'react'
import { Table } from 'antd';

const HistoryDownloadModal = () => {
    const columns = [
        {
          title: 'Nama',
          dataIndex: 'nama',
          key: 'nama',
          fixed: 'left',
          filterSearch: true,
          filterMode: 'tree',
          onFilter: (value, record) => record.name.indexOf(value) === 0,
        },
        {
          title: 'Tanggal',
          dataIndex: 'tanggal',
          key: 'tanggal',
        },
        {
          title: 'Jam',
          dataIndex: 'jam',
          key: 'jam',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
    ]
    const data = [];
    for (let i = 0; i < 5; i++) {
        data.push({
        nama: '12123'+i+'-Usman',
        tanggal: '10/12/2022',
        jam: '12:30:44',
        status: i % 2 === 0 ? "Valid" : "Tidak Valid"
        });
    }
    return (
        <div className="">
            <div className="text-2xl my-5 text-blue-900 font-semibold">History Download</div>
            <div className="text-xl my-5 text-blue-900">MapaIndividu.pdf</div>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                size="middle"
            />
        </div>
      )
}

export default HistoryDownloadModal
