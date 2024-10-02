import React, { useEffect } from 'react'
import "./Employee.css";
import FilterSidebar from '../../component/FilterSidebar/FilterSidebar';
import FilterHeader from '../../component/FilterHeader/FilterHeader';
import { useState } from 'react';
import { Filter} from 'lucide-react';
import {Link} from "react-router-dom";
const Employee = ({open,setOpen,onHeaderClick,clickLink,toggleDialog}) => {
  useEffect(() => {
    setOpen(false);
  }, [clickLink]);
  const data = [
    {id:'1', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'2', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'3', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'4', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'5', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'6', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'7', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'8', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'9', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'10', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'11', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'12', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'13', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'14', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'15', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'16', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'17', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'18', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'19', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'20', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'21', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'22', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'23', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'24', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'25', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'26', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'27', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'28', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'29', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'30', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'31', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'32', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'33', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'34', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'35', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'37', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    {id:'37', name: 'HR-LPOL-2024-00007', status: 'đã kích hoạt', eplcode:"",ngaysinh:"19/05/2003",chinhanh:'',ten:"abc" },
    
  ];
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
    <div className='employee'>
      <FilterHeader click={onHeaderClick} />
      { !open && (
              <FilterSidebar open={open} setOpen={setOpen} />
            )}
      <div className='table'>
        <div className="table-header">
              <div className="search-filter">
                  <input className="search-filter-input" type="text" placeholder='Tìm Kiếm' />
              </div>
              <div className="insert">
                  <button className='insert-button' onClick={toggleDialog}> + Thêm Nhân Viên</button>
              </div>
              <div className="filter">
                  <button className='filter-coponent'><Filter className="filter-icon"/><span>Bộ Lọc</span></button>
                  <button className='filter-coponent'><div className="filter-icon"/><span>Tác Vụ</span></button>
              </div>
        </div>
        <div className="table-filter">
        <div className="table-contain">
            <div className="format-title">
            <b><input type="checkbox" checked={selectAll} 
                        onChange={handleSelectAllChange} /></b>
            <b>Tên Đầy Đủ</b>
            <b>Trạng thái</b>
            <b>Employee_Code</b>
            <b>Ngày Sinh</b>
            <b>Chi Nhánh</b>
            <b>Tên</b>
        </div>
            {data.map((item,index) => {
              return (
              <div  className='format' key={item.id}>
                    <td ><input type="checkbox"  checked={selectedItems[index]} 
                            onChange={handleItemChange(index)} /></td>
                    <Link to={`/employee/${item.id}`}><td >{item.name}</td></Link>
                    <Link to={`/employee/${item.id}`}><td >{item.status}</td></Link>
                    <Link to={`/employee/${item.id}`}><td >{item.eplcode}</td></Link>
                    <Link to={`/employee/${item.id}`}><td >{item.ngaysinh}</td></Link>
                    <Link to={`/employee/${item.id}`}><td >{item.chinhanh}</td></Link>
                    <Link to={`/employee/${item.id}`}><td >{item.ten}</td></Link>
              </div>
              );
            })}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Employee
