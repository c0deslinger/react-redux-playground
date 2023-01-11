import React from 'react';
import { Table } from 'antd';
import {IoMdOpen} from 'react-icons/io'

const columns = [
  {
    title: 'Nama Project',
    dataIndex: 'name',
    key: 'name',
    width: 50,
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
    title: 'Kantor Audit',
    dataIndex: 'kantor_audit',
    key: 'kantor_audit',
    width: 20
  },
  {
    title: 'Tipe Audit',
    dataIndex: 'tipe_audit',
    key: 'tipe_audit',
    width: 20
  },
  {
    title: 'Tahun Audit',
    dataIndex: 'tahun_audit',
    key: 'tahun_audit',
    width: 20
  },
  {
    title: 'Triwulan',
    dataIndex: 'triwulan',
    key: 'triwulan',
    width: 20
  },
  {
    title: 'Tanggal',
    dataIndex: 'tanggal',
    key: 'tanggal',
    width: 20
  },
  {
    title: 'Object Audit',
    dataIndex: 'object_audit',
    key: 'object_audit',
    width: 40
  },
  {
    title: 'Tim Audit',
    dataIndex: 'tim_audit',
    key: 'tim_audit',
    width: 20
  },
  {
    title: 'Auditee',
    dataIndex: 'auditee',
    key: 'auditee',
    width: 20
  },

  {
    title: 'Adendum Ke',
    dataIndex: 'adendum',
    key: 'adendum',
    width: 20
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    width: 20,
    fixed: 'right',
    render: () => <a href="/documents/ewp"><IoMdOpen /></a>
  },
];
const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    kantor_audit: 'AIW Medan',
    tipe_audit: 'Reguler',
    tahun_audit: '2022',
    triwulan: 1,
    tanggal: '1',
    object_audit: 'SoftLake Co',
    tim_audit: 'Ayam',
    auditee: 'II',
    adendum: 'I',
  });
}
const CatalogTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    size="middle"
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
export default CatalogTable;