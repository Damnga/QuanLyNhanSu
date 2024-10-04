import React from 'react'
import "./EmployeeHealthInsurance.css";
import FilterHeader from '../../../component/FilterHeader/FilterHeader';
import FilterSidebar from '../../../component/FilterSidebar/FilterSidebar';
import { useState } from 'react';
import { Filter} from 'lucide-react';
import { BaoHiemNhanVien } from '../../../api/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const EmployeeHealthInsurance = () => {
  const navigate = useNavigate();
const [selectAll, setSelectAll] = useState(false);
const [selectedItems, setSelectedItems] = useState(BaoHiemNhanVien.map(() => false));
const [insert, setInsert] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editingId, setEditingId] = useState(null); 
  const [baohiem, setBaoHiem] = useState({
    ID: "",
    BaoHiem: "",
  });

  const openInsert = () => {
    setInsert(true);
  };

  const closeInsert = () => {
    setInsert(false);
    setBaoHiem({ ID: "", BaoHiem: "" });
  };

  const openEdit = (id) => {
    const itemToEdit = BaoHiemNhanVien.find(item => item.ID === id);
    setBaoHiem(itemToEdit);
    setEditingId(id); 
    setEdit(true);
  };

  const closeEdit = () => {
    setEdit(false);
    setBaoHiem({ ID: "", BaoHiem: "" }); 
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
    setBaoHiem(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    try {
      const newBaoHiem = {
        ...baohiem,
        ID: Math.floor(Math.random() * 10000)
      };
      LoaiNhanVien.push(newBaoHiem);
      toast.success('Bảo Hiểm mới đã được tạo thành công!', {
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
      const index = BaoHiemNhanVien.findIndex((e) => e.ID === editingId);
      if (index !== -1) {
        BaoHiemNhanVien[index] = baohiem;
        console.log('Thông tin bảo hiểm  đã cập nhật:', baohiem);
        toast.success('Thông tin bảo hiểm đã cập nhật', {
          position: "top-right",
        });
        closeEdit(); 
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      });
      console.log("Thông tin nhân viên đã cập nhật:", error);
      navigate('/app/employee_type');
    }
  };

  const handleRemove = (id) => {
    try {
      const updatedList = BaoHiemNhanVien.filter((item) => item.ID !== id);
      setSelectedItems(updatedList.map(() => false));
      toast.success('Bảo Hiểm đã được xóa thành công!', {
        position: "top-right",
      });

      while (BaoHiemNhanVien.length) { BaoHiemNhanVien.pop(); }
      updatedList.forEach(item => BaoHiemNhanVien.push(item));
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      });
    }
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
                  <button className='branch-insert-button'onClick={openInsert} > + Thêm Bảo Hiểm</button>
              </div>
              {insert && (
  <div className='overlay'> 
    <div className='employee-type-insert'>
      <div className='employee-type-insert-insert'>
        <div className="employee-type-title-insert">
          Thêm Bảo Hiểm
        </div>
        <div className="employee-type-input-insert">
          <input type="text" onChange={handleChange} name="LoaiNhanVien" />
        </div>
        <div className="employee-type-save">
          <button onClick={handleSave}>Lưu</button>
          <button onClick={closeInsert}>X</button>
        </div>
      </div>
    </div>
  </div>
)}
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
            <b>ID</b>
            <b>Bảo Hiểm </b>
        </div>
            {BaoHiemNhanVien.map((item,index) => {
              return (
                <div className='employee-type-format' key={item.ID}>
                <td>
                  <input type="checkbox" checked={selectedItems[index]} onChange={handleItemChange(index)} />
                </td>
                <td onClick={() => openEdit(item.ID)}>{item.ID}</td>
                <td onClick={() => openEdit(item.ID)}>{item.BaoHiem}</td>
                {edit && editingId === item.ID && ( 
                  <div className='overlay'>
                    <div className='insert'>
                      <div className='insert-insert'>
                        <div className="title-insert">
                          Cập Nhật Loại Nhân Viên
                        </div>
                        <div className="input-insert">
                          <input type="text" onChange={handleChange} value={baohiem.BaoHiem} name="BaoHiem" />
                        </div>
                        <div className="save">
                          <button onClick={handleEdit}>Cập Nhật</button>
                          <button onClick={closeEdit}>X</button>
                          <button onClick={() => handleRemove(item.ID)}>Xóa</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              );
            })}
        </div>
        </div>
      </div>
    </div>
  )
}


export default EmployeeHealthInsurance