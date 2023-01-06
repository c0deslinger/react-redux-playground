import FilterItem from "../components/FilterItem";
import {  Select } from "antd";
import { FilteAuditee, FilterAdendum, FilterObjectAudit, FilterProjectAudit, FilterTanggalTahunAudit, FilterTimAudit, FilterTipeAudit } from "../components/filter/FilterProjectAudit";
import {VscFilter} from 'react-icons/vsc'
import CatalogTable from "../components/table/CatalogTable";
import { Breadcrumb } from 'antd';

export default function CatalogPage(props){
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
            <div className="h-40 bg-white grid grid-cols-2 py-10 px-8">
                <div className="text-3xl text-slate-700 my-auto">EWP</div>
                <div className="grid grid-cols-2 items-center gap-3">
                <Select
                    loading
                    defaultValue="EWP"
                    options={[
                        {
                        value: 'EWP',
                        label: 'EWP',
                        },
                    ]}
                    />
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
            </div>
            <div className="flex">
                <div className="w-[450px] bg-white min-h-screen border border-slate-200 float-left block">
                    <div className="text-2xl text-slate-700 py-10 px-8 flex"> <VscFilter className="float-left self-center mr-3"/>Filter</div>
                    <FilterItem title='Project Audit' filterContent={<FilterProjectAudit />} />
                    <FilterItem title='Tipe Audit' filterContent={<FilterTipeAudit />} />
                    <FilterItem title='Tanggal Tahun Audit' filterContent={<FilterTanggalTahunAudit/>} />
                    <FilterItem title='Object Audit' filterContent={<FilterObjectAudit/>} />
                    <FilterItem title='Tim Audit' filterContent={<FilterTimAudit /> }/>
                    <FilterItem title='Auditee'filterContent={<FilteAuditee /> }/>
                    <FilterItem title='Adendum'filterContent={<FilterAdendum /> }/>
                </div>
                <div className="p-3 m-4 w-screen">
                    <CatalogTable />
                </div>
            </div>
        </div>
        </>
    );
}