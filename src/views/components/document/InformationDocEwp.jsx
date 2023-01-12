import React from 'react'
import { useState } from 'react'
import { Button } from 'antd';
import {BiChevronDown, BiChevronRight} from 'react-icons/bi'



export default function InformationDocEwp(){

    const [isExpanded, setExpanded] = useState(false);

    const InfoRow = ({ keyName, value }) => (
        <div className="flex my-2">
          <div className="w-2/6 text-md font-light">{keyName}</div>
          <div className="w-4/6 text-md font-light"> : {value}</div>
        </div>
      );

    function DetailsDocument() {
        if(!isExpanded){
            return <></>
        }
        return (<>
         <div className='w-1/2' >
            <InfoRow keyName="Nama Project" value="John Doe" />
            <InfoRow keyName="Kantor Audit" value="Kantor Audit 1" />
            <InfoRow keyName="Tipe Audit" value="Reguler" />
            <InfoRow keyName="Tahun Audit" value="2022" />
            <InfoRow keyName="Triwulan" value="1" />
            <InfoRow keyName="Periode" value="11/12/2022 - 22/12/2022" />
            <InfoRow keyName="Object Audit" value="Object Audit A" />
            <InfoRow keyName="Tim Audiot" value="Tim Warriors" />
            <InfoRow keyName="Auditee" value="Auditee Kota A" />
            <InfoRow keyName="Adendum" value="I" />
        </div>
        </>)
    }

    return (<>
    
        <div className="cursor-pointer mx-8 mt-4 p-4 border border-blue-800 rounded-md text-blue-800 hover:bg-blue-50"
        onClick={()=>{
            setExpanded((state) => !state);
        }}
        >
            <div className="flex">
                <span className='w-full float-left text-lg'>Information</span>
                <Button className='bg-transparent px-3 py-1' onClick={()=>{
                    setExpanded((state) => !state);
                }}>
                    {isExpanded ? <BiChevronDown /> : <BiChevronRight />   } 
                </Button>
            </div>
            <DetailsDocument />
        </div>
    </>)
}