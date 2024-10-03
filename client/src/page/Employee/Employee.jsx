import React, { useEffect } from 'react'
import "./Employee.css";
import FilterSidebar from '../../component/FilterSidebar/FilterSidebar';
import FilterHeader from '../../component/FilterHeader/FilterHeader';
import { useState } from 'react';
import { Filter} from 'lucide-react';
import {Link} from "react-router-dom";
import {NhanVien} from "../../api/data";
const Employee = ({open,setOpen,onHeaderClick,clickLink,toggleDialog}) => {
  useEffect(() => {
    setOpen(true);
  }, [clickLink]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState(NhanVien.map(() => false));
  const [data,setData]=useState(NhanVien);

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
    const handleDelete = () => {
      const newData = data.filter((item, index) => !selectedItems[index]); 
      setData(newData); 
      setSelectedItems(newData.map(() => false)); 
      setSelectAll(false); 
    };
  return (
    <div className='employee'>
      <FilterHeader click={onHeaderClick} onDelete={handleDelete} />
      <FilterSidebar />
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
            <b>Mã Nhân Viên</b>
            <b>Tên Đầy Đủ</b>
            <b>Giới Tính</b>
            <b>Ngày Sinh</b>
            <b>Địa Chỉ</b>
            <b>Cấp Bậc</b>
            <b>Chi Nhánh</b>
            <b>Sđt</b>
            <b>Loại Nhân Viên</b>
            <b>CCCD</b>
            <b>Ngày Nhận Việc</b>
            <b>Ngày Kết Thúc</b>
        </div>
            {NhanVien.map((item,index) => {
              return (
              <div  className='format' key={item.ID}>
                    <td ><input type="checkbox"  checked={selectedItems[index]} 
                            onChange={handleItemChange(index)} /></td>
                    <Link to={`/employee/${item.ID}`}><td >{item.ID}</td></Link>
                    <Link to={`/employee/${item.ID}`}><td >{item.Ho} {item.Dem} {item.Ten}</td></Link>
                    <Link to={`/employee/${item.ID}`}><td >{item.GioiTinh}</td></Link>
                    <Link to={`/employee/${item.ID}`}><td >{item.NgaySinh}</td></Link>
                    <Link to={`/employee/${item.ID}`}><td >{item.DiaChi}</td></Link>
                    <Link to={`/employee/${item.ID}`}><td >{item.CapBac}</td></Link>
                    <Link to={`/employee/${item.ID}`}><td >{item.ChiNhanh}</td></Link>
                    <Link to={`/employee/${item.ID}`}><td >{item.Sdt}</td></Link>
                    <Link to={`/employee/${item.ID}`}><td >{item.LoaiNhanVien}</td></Link>
                    <Link to={`/employee/${item.ID}`}><td >{item.CCCD}</td></Link>
                    <Link to={`/employee/${item.ID}`}><td >{item.NgayBatDau}</td></Link>
                    <Link to={`/employee/${item.ID}`}><td >{item.NgayKetThuc}</td></Link>
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
