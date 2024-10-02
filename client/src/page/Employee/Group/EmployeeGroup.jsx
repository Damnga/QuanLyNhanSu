import React from 'react'
import "./EmployeeGroup.css";
import FilterHeader from '../../../component/FilterHeader/FilterHeader';
import FilterSidebar from '../../../component/FilterSidebar/FilterSidebar';
import { useState } from 'react';
import { Filter} from 'lucide-react';
const EmployeeGroup = () => {
  const data = [
    {id:'1', name: 'Giám Đốc',type:"CEO" },
    {id:'2', name: 'Giám Đốc',type:"CEO" },
    {id:'3', name: 'Giám Đốc',type:"CEO" },
    {id:'4', name: 'Giám Đốc',type:"CEO" },
    {id:'5', name: 'Giám Đốc',type:"CEO" },
    {id:'6', name: 'Giám Đốc',type:"CEO" },
    {id:'7', name: 'Giám Đốc',type:"CEO" },
    {id:'8', name: 'Giám Đốc',type:"CEO" },
    {id:'9', name: 'Giám Đốc',type:"CEO" },
    {id:'10', name: 'Giám Đốc',type:"CEO" },
    {id:'11', name: 'Giám Đốc',type:"CEO" },
    {id:'12', name: 'Giám Đốc',type:"CEO" },
    {id:'13', name: 'Giám Đốc',type:"CEO" },
    {id:'14', name: 'Giám Đốc',type:"CEO" },
    {id:'15', name: 'Giám Đốc',type:"CEO" },
    {id:'16', name: 'Giám Đốc',type:"CEO" },
    {id:'17', name: 'Giám Đốc',type:"CEO" },
    {id:'18', name: 'Giám Đốc',type:"CEO" },
    {id:'19', name: 'Giám Đốc',type:"CEO" },
    {id:'20', name: 'Giám Đốc',type:"CEO" },
    {id:'21', name: 'Giám Đốc',type:"CEO" },
    {id:'22', name: 'Giám Đốc',type:"CEO" },
    {id:'23', name: 'Giám Đốc',type:"CEO" },
    {id:'24', name: 'Giám Đốc',type:"CEO" },
    {id:'25', name: 'Giám Đốc',type:"CEO" },
]
const [selectAll, setSelectAll] = useState(false);
const [selectedItems, setSelectedItems] = useState(data.map(() => false));


const handleSelectAllChange = (event) => {
      const checked = event.target.checked;
      setSelectAll(checked);
      setSelectedItems(selectedItems.map(() => checked));
  };

  const handleItemChange = (index) => (event) => {
      const checked = event.target.checked;
      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems[index] = checked;
      setSelectedItems(updatedSelectedItems);
      const allChecked = updatedSelectedItems.every((item) => item);
      setSelectAll(allChecked);
  };
  return (
    <div className='branch'>
      <FilterHeader/>
      <FilterSidebar/>
      <div className='branch-table'>
        <div className="branch-table-header">
              <div className="branch-search-filter">
                  <input className="branch-search-filter-input" type="text" placeholder='Tìm Kiếm' />
              </div>
              <div className="branch-insert">
                  <button className='branch-insert-button'> + Thêm Chức Danh</button>
              </div>
              <div className="branch-filter">
                  <button className='branch-filter-coponent'><Filter className="filter-icon"/><span>Bộ Lọc</span></button>
                  <button className='branch-filter-coponent'><div className="filter-icon"/><span>Tác Vụ</span></button>
              </div>
        </div>
        <div className="branch-table-filter">
        <div className="branch-table-contain">
            <div className="branch-format-title">
            <b><input type="checkbox" checked={selectAll} 
                        onChange={handleSelectAllChange} /></b>
            <b>Tên Chức Danh</b>
            <b>Kí Hiệu</b>
        </div>
            {data.map((item,index) => {
              return (
              <div  className='branch-format' key={item.id}>
                    <td ><input type="checkbox"  checked={selectedItems[index]} 
                            onChange={handleItemChange(index)} /></td>
                    <td >{item.name}</td>
                    <td >{item.type}</td>
              </div>
              );
            })}
        </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeGroup