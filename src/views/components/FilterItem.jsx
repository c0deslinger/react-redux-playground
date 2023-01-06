import { Button } from 'antd';
import React from 'react'
import { useState } from 'react';
import {BiChevronDown, BiChevronRight} from 'react-icons/bi'

export default function FilterItem(props){

    const [isExpanded, setExpanded] = useState(false);

    function changeState(){
        setExpanded((state) => !state);
    }

    return (<>
         <div className="w-50 px-8 py-2 bg-gray-100 mb-1  border-slate-200 border-t-2 border-b-2">
            <div className="flex">
                <span className='w-full float-left text-gray-500 self-center text-sm'>{props.title}</span>
                <Button className='bg-transparent px-3 py-1' onClick={changeState}>
                    {isExpanded ? <BiChevronDown /> : <BiChevronRight />   } 
                </Button>
            </div>
            <div style={{display: isExpanded ? 'block' : 'none'}} className="transition-all duration-500 " >
                {props.filterContent}
            </div>
            </div> 
    </>)
}