import React from 'react'
import "./Branch.css";
import FilterHeader from '../../component/FilterHeader/FilterHeader';
import FilterSidebar from '../../component/FilterSidebar/FilterSidebar';
import { useState } from 'react';
import { Filter} from 'lucide-react';
const Branch = () => {
    const data = [
        {id:'1', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'2', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'3', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'4', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'5', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'6', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'7', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'8', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'9', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'10', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'11', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'12', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'13', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'14', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'15', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'16', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'17', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'18', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'19', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'20', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'21', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'22', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'23', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'24', name: 'HR-LPOL-2024-00007',type:"thực tập" },
        {id:'25', name: 'HR-LPOL-2024-00007',type:"thực tập" },
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
                  <button className='branch-insert-button'> + Thêm Chi Nhánh </button>
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
            <b>Tên</b>
            <b>Tên Chi Nhánh</b>
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

export default Branch
