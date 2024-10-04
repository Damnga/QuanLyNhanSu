import React from 'react'
import "./EmployeeLevel.css";
import FilterHeader from '../../../component/FilterHeader/FilterHeader';
import FilterSidebar from '../../../component/FilterSidebar/FilterSidebar';
import { useState } from 'react';
import { Filter} from 'lucide-react';
import { CapBac } from '../../../api/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const EmployeeLevel = () => {
  const navigate = useNavigate();
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState(CapBac.map(() => false));
  const [insert, setInsert] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editingId, setEditingId] = useState(null); 
  const [capbac, setCapBac] = useState({
    ID: "",
    CapBac: "",
    CauTrucLuong: "",
  });

  const openInsert = () => {
    setInsert(true);
  };

  const closeInsert = () => {
    setInsert(false);
    setCapBac({ ID: "",CapBac: "",
      CauTrucLuong: "", }); 
  };

  const openEdit = (id) => {
    const itemToEdit = CapBac.find(item => item.ID === id);
    setCapBac(itemToEdit);
    setEditingId(id); 
    setEdit(true);
  };

  const closeEdit = () => {
    setEdit(false);
    setCapBac({ID: "",
      CapBac: "",
      CauTrucLuong: ""}); 
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
    setCapBac(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    try {
      const newCapBac = {
        ...capbac,
        ID: Math.floor(Math.random() * 10000)
      };
      CapBac.push(newCapBac);
      toast.success('Cấp Bậc mới đã được tạo thành công!', {
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
      const index = CapBac.findIndex((e) => e.ID === editingId);
      if (index !== -1) {
        CapBac[index] = capbac;
        console.log('Thông tin cấp bậc đã cập nhật:', capbac);
        toast.success('Thông tin cấp bậcn đã cập nhật', {
          position: "top-right",
        });
        closeEdit(); 
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      });
      console.log("Thông tin cấp bậc đã cập nhật:", error);
      navigate('/app/employee_level');
    }
  };

  const handleRemove = (id) => {
    try {
      const updatedList = CapBac.filter((item) => item.ID !== id);
      setSelectedItems(updatedList.map(() => false));
      toast.success('Cấp Bậc đã được xóa thành công!', {
        position: "top-right",
      });

      while (CapBac.length) { CapBac.pop(); }
      updatedList.forEach(item => CapBac.push(item));
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
                  <button className='branch-insert-button' onClick={openInsert}> + Thêm Cấp Bậc</button>
              </div>
              {insert && (
  <div className='overlay'> 
    <div className='employee-type-insert'>
      <div className='employee-type-insert-insert'>
        <div className="employee-type-title-insert">
          Thêm Cấp Bậc
        </div>
        <div className="employee-type-input-insert">
          <input type="text" onChange={handleChange} name="CapBac" />
        </div>
        <div className="employee-type-title-insert">
          Thêm Cấu Trúc Lương
        </div>
        <div className="employee-type-input-insert">
          <input type="text" onChange={handleChange} name="CauTrucLuong" />
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
            <b>Cấp Bậc</b>
            <b>Cấu Trúc Lương</b>
        </div>
            {CapBac.map((item,index) => {
              return (
                <div className='employee-type-format' key={item.ID}>
                <td>
                  <input type="checkbox" checked={selectedItems[index]} onChange={handleItemChange(index)} />
                </td>
                <td onClick={() => openEdit(item.ID)}>{item.CapBac}</td>
                <td onClick={() => openEdit(item.ID)}>{item.CauTrucLuong}</td>
                {edit && editingId === item.ID && ( 
                  <div className='overlay'>
                    <div className='insert'>
                      <div className='insert-insert'>
                        <div className="title-insert">
                          Cập Nhật Cấp Bậc
                        </div>
                        <div className="input-insert">
                          <input type="text" onChange={handleChange} value={capbac.CapBac} name="CapBac" />
                        </div>
                        <div className="input-insert">
                          <input type="text" onChange={handleChange} value={capbac.CauTrucLuong} name="CauTrucLuong" />
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

export default EmployeeLevel