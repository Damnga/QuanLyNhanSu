import React from 'react'
import "./FilterHeader.css";
import { AlignJustify,Blinds, Ellipsis, Plus, RotateCw} from 'lucide-react';
const FilterHeader = ({menu,setMenu,click }) => {
  return (
    <div className="filterheader">
        <div className="filterheader-left">
            <div>
              <AlignJustify onClick={click}  className='filterheader-left-icon'/>
            </div>
            <span>{menu}Nhân Viên</span>
        </div>
        <div className="filterheader-right">
            <div className="filterheader-right-select">
                <select className="filterheader-right-select-text">
                    <option><Blinds/>Xem Kiểu Danh Sách</option>
                </select>
            </div>
            <div className="filterheader-right-refesh">
                <RotateCw className='refesh'/>
            </div>
            <div className="filterheader-right-dot">
                <Ellipsis className='dot'/>
            </div>
           
        </div>
    </div>
  )
}

export default FilterHeader
