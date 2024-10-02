import React from 'react'
import "./Department.css";
import FilterHeader from '../../component/FilterHeader/FilterHeader';
import FilterSidebar from '../../component/FilterSidebar/FilterSidebar';
import { useState } from 'react';
import { Filter} from 'lucide-react';
const Department = () => {
  const data = [
    {id:'1', name: 'Bán Hàng',type:"ca" },
    {id:'2', name: 'Bán Hàng',type:"ca" },
    {id:'3', name: 'Bán Hàng',type:"ca" },
    {id:'4', name: 'Bán Hàng',type:"ca" },
    {id:'5', name: 'Bán Hàng',type:"ca" },
    {id:'6', name: 'Bán Hàng',type:"ca" },
    {id:'7', name: 'Bán Hàng',type:"ca" },
    {id:'8', name: 'Bán Hàng',type:"ca" },
    {id:'9', name: 'Bán Hàng',type:"ca" },
    {id:'10', name: 'Bán Hàng',type:"ca" },
    {id:'11', name: 'Bán Hàng',type:"ca" },
    {id:'12', name: 'Bán Hàng',type:"ca" },
    {id:'13', name: 'Bán Hàng',type:"ca" },
    {id:'14', name: 'Bán Hàng',type:"ca" },
    {id:'15', name: 'Bán Hàng',type:"ca" },
    {id:'16', name: 'Bán Hàng',type:"ca" },
    {id:'17', name: 'Bán Hàng',type:"ca" },
    {id:'18', name: 'Bán Hàng',type:"ca" },
    {id:'19', name: 'Bán Hàng',type:"ca" },
    {id:'20', name: 'Bán Hàng',type:"ca" },
    {id:'21', name: 'Bán Hàng',type:"ca" },
    {id:'22', name: 'Bán Hàng',type:"ca" },
    {id:'23', name: 'Bán Hàng',type:"ca" },
    {id:'24', name: 'Bán Hàng',type:"ca" },
    {id:'25', name: 'Bán Hàng',type:"ca" },
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
                  <button className='branch-insert-button'> + Thêm Phòng Ban </button>
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
            <b>Tên Phòng Ban</b>
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

export default Department
