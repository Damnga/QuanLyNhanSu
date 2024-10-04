import React, { useEffect } from 'react'
import "./Employee.css";
import FilterSidebar from '../../component/FilterSidebar/FilterSidebar';
import FilterHeader from '../../component/FilterHeader/FilterHeader';
import { useState } from 'react';
import { Filter} from 'lucide-react';
import {Link} from "react-router-dom";
import {NhanVien} from "../../api/data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Insert from "./Insert/insert";
const Employee = ({open,setOpen,onHeaderClick,clickLink,toggleDialog}) => {
  const navigate = useNavigate();
  useEffect(() => {
    setOpen(true);
  }, [clickLink]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState(NhanVien.map(() => false));
  const [data,setData]=useState(NhanVien);
  const [insert, setInsert] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editingId, setEditingId] = useState(null); 
  const [employee, setEmployee] = useState({
    ID: "",
    Ten:"",
    Dem:"",
    Ho:"",
    Email:"",
    LoaiNhanVien:"",
    CapBac:"",
    ChiNhanh: "",
    NgayBatDau:"",
    NgayKetThuc:"",
    GioiTinh:"",
    Sdt:"",
    DiaChi:"",
    CCCD:"",
    NgaySinh:""
  });
  const openInsert = () => {
    setInsert(true);
  };

  const closeInsert = () => {
    setEmployee(false);
    setEmployee({ ID: "",
      Ten:"",
      Dem:"",
      Ho:"",
      Email:"",
      LoaiNhanVien:"",
      CapBac:"",
      ChiNhanh: "",
      NgayBatDau:"",
      NgayKetThuc:"",
      GioiTinh:"",
      Sdt:"",
      DiaChi:"",
      CCCD:"",
      NgaySinh:"" }); 
  };

  const openEdit = (id) => {
    const itemToEdit = NhanVien.find(item => item.ID === id);
    setEmployee(itemToEdit);
    setEditingId(id); 
    setEdit(true);
  };

  const closeEdit = () => {
    setEdit(false);
    setEmployee({ ID: "",
      Ten:"",
      Dem:"",
      Ho:"",
      Email:"",
      LoaiNhanVien:"",
      CapBac:"",
      ChiNhanh: "",
      NgayBatDau:"",
      NgayKetThuc:"",
      GioiTinh:"",
      Sdt:"",
      DiaChi:"",
      CCCD:"",
      NgaySinh:""}); 
  };

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
    setSelectAll(updatedSelectedItems.every((item) => item));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    try {
      const newEmployee = {
        ...employee,
        ID: Math.floor(Math.random() * 10000)
      };
      NhanVien.push(newEmployee);
      toast.success('Nhân Viên mới đã được tạo thành công!', {
        position: "top-right",
      });
      closeInsert();
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      });
    }
  };

  const handleEdit = () => {
    try {
      const index = NhanVien.findIndex((e) => e.ID === editingId);
      if (index !== -1) {
        NhanVien[index] = employee;
        console.log('Thông tin nhân viên đã cập nhật:', employee);
        toast.success('Thông tin nhân viên đã cập nhật', {
          position: "top-right",
        });
        closeEdit(); 
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      });
      console.log("Thông tin nhân viên đã cập nhật:", error);
      navigate('/app/employee');
    }
  };

  const handleRemove = (id) => {
    try {
      const updatedList = NhanVien.filter((item) => item.ID !== id);
      setSelectedItems(updatedList.map(() => false));
      toast.success('Nhân Viên đã được xóa thành công!', {
        position: "top-right",
      });

      while (NhanVien.length) { NhanVien.pop(); }
      updatedList.forEach(item => NhanVien.push(item));
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      });
    }
  };
    const deleteSelectedItems = () => {
      const remainingItems = data.filter((_, index) => !selectedItems[index]);
      setData(remainingItems);
      setSelectedItems([]);
      setSelectAll(false);
    };
  return (
    <div className='employee'>
      <FilterHeader click={onHeaderClick} onClick={deleteSelectedItems}/>
      <FilterSidebar />
      <div className='table'>
        <div className="table-header">
              <div className="search-filter">
                  <input className="search-filter-input" type="text" placeholder='Tìm Kiếm' />
              </div>
              <div className="insert">
                  <button className='insert-button' onClick={openInsert}> + Thêm Nhân Viên</button>
              </div>
              {insert && (
            <div className='overlay'> 
              <Insert onClick ={closeEdit}/>
            </div>
)}
  <div className="filter">
   <button className='filter-coponent'><Filter className="filter-icon"/><span>Bộ Lọc</span></button>
   <button className='filter-coponent'><div className="filter-icon"/><span >Tác Vụ</span></button>
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
