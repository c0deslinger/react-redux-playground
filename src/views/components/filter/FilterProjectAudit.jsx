
import { Input } from 'antd';
import { Radio, Checkbox, Select, DatePicker } from 'antd';
import { useState } from 'react';


export function FilterProjectAudit(props){
    return (<>
        <Input placeholder='Nama Project' className='mt-5'/>
        <Input placeholder='Kantor Audit'  className='mb-5 mt-2'/>
    </>);
}

export function FilterTipeAudit(){
    const [value1, setValue1] = useState('Semua');

    const plainOptions = ['Semua', 'AIW', 'AITI', 'AIKP'];
    const chkOptions = ['Reguler', 'Spesial', 'Tematik'];

    const onChange1 = ({ target: { value } }) => {
        setValue1(value);
      };
    return (<>
      <Radio.Group className='my-5 text-slate-700 text-sm' options={plainOptions} onChange={onChange1} value={value1} />
      <Checkbox.Group style={{ color: 'red' }} className='mb-5' options={chkOptions}  />
    </>)
}

export function FilterTanggalTahunAudit(){
    return (<>
        <Input placeholder='Tahun Audit' className='mt-5'/>
        <Select placeholder='Triwulan' className="my-5 w-full" defaultValue="EWP" options={[{value: 'EWP',label: 'EWP', },]}/>
        <div className="grid grid-cols-2 mb-5 gap-2">
                <DatePicker />
                <DatePicker />
        </div>
    </>)
}

export function FilterObjectAudit(){
    return (<>
        <Input placeholder='Object Audit' className='my-5'/>
    </>)
}

export function FilterTimAudit(){
    return (<>
        <Input placeholder='Tim Audit' className='my-5'/>
    </>)
}
export function FilteAuditee(){
    return (<>
        <Input placeholder='Auditee' className='my-5'/>
    </>)
}

export function FilterAdendum(){
    return (<>
        <Input placeholder='Adendum' className='my-5'/>
    </>)
}