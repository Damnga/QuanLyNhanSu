
import React, { useState } from 'react';
import FilterHeader from '../../../component/FilterHeader/FilterHeader';
import FilterSidebar from '../../../component/FilterSidebar/FilterSidebar';
import { Filter } from 'lucide-react';
import "./EmployeeType.css";
import { LoaiNhanVien } from '../../../api/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const EmployeeType = () => {
  const navigate = useNavigate();
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState(LoaiNhanVien.map(() => false));
  const [insert, setInsert] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editingId, setEditingId] = useState(null); 
  const [employeeTypeData, setEmployeeTypeData] = useState({
    ID: "",
    LoaiNhanVien: "",
  });

  const openInsert = () => {
    setInsert(true);
  };

  const closeInsert = () => {
    setInsert(false);
    setEmployeeTypeData({ ID: "", LoaiNhanVien: "" }); // Reset khi đóng
  };

  const openEdit = (id) => {
    const itemToEdit = LoaiNhanVien.find(item => item.ID === id);
    setEmployeeTypeData(itemToEdit);
    setEditingId(id); 
    setEdit(true);
  };

  const closeEdit = () => {
    setEdit(false);
    setEmployeeTypeData({ ID: "", LoaiNhanVien: "" }); 
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
    setEmployeeTypeData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    try {
      const newEmployeeType = {
        ...employeeTypeData,
        ID: Math.floor(Math.random() * 10000)
      };
      LoaiNhanVien.push(newEmployeeType);
      toast.success('Loại Nhân viên mới đã được tạo thành công!', {
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
      const index = LoaiNhanVien.findIndex((e) => e.ID === editingId);
      if (index !== -1) {
        LoaiNhanVien[index] = employeeTypeData;
        console.log('Thông tin loại nhân viên đã cập nhật:', employeeTypeData);
        toast.success('Thông tin loại nhân viên đã cập nhật', {
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
      const updatedList = LoaiNhanVien.filter((item) => item.ID !== id);
      setSelectedItems(updatedList.map(() => false));
      toast.success('Loại Nhân viên đã được xóa thành công!', {
        position: "top-right",
      });

      while (LoaiNhanVien.length) { LoaiNhanVien.pop(); }
      updatedList.forEach(item => LoaiNhanVien.push(item));
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      });
    }
  };

  return (
    <div className='employeetype'>
      <FilterHeader />
      <FilterSidebar />
      <div className='employee-type-table'>
        <div className="employee-type-table-header">
          <div className="employee-type-search-filter">
            <input className="employee-type-search-filter-input" type="text" placeholder='Tìm Kiếm' />
          </div>
          <div className="employee-type-insert">
            <button className='employee-type-insert-button' onClick={openInsert}> + Thêm Loại Nhân Viên </button>
          </div>
          {insert && (
  <div className='overlay'> 
    <div className='employee-type-insert'>
      <div className='employee-type-insert-insert'>
        <div className="employee-type-title-insert">
          Thêm Loại Nhân Viên
        </div>
        <div className="employee-type-input-insert">
          <input type="text" onChange={handleChange} name="ChiNhanh" />
        </div>
        <div className="employee-type-save">
          <button onClick={handleSave}>Lưu</button>
          <button onClick={closeInsert}>X</button>
        </div>
      </div>
    </div>
  </div>
)}
          <div className="employee-type-filter">
            <button className='employee-type-filter-coponent'>
              <Filter className="filter-icon" /><span>Bộ Lọc</span>
            </button>
            <button className='employee-type-filter-coponent'>
              <div className="filter-icon" /><span>Tác Vụ</span>
            </button>
          </div>
        </div>
        <div className="employee-type-table-filter">
          <div className="employee-type-table-contain">
            <div className="employee-type-format-title">
              <b><input type="checkbox" checked={selectAll} onChange={handleSelectAllChange} /></b>
              <b>ID</b>
              <b>Loại Nhân Viên</b>
            </div>
            {LoaiNhanVien.map((item, index) => {
  return (
    <div className='employee-type-format' key={item.ID}>
      <td>
        <input type="checkbox" checked={selectedItems[index]} onChange={handleItemChange(index)} />
      </td>
      <td onClick={() => openEdit(item.ID)}>{item.ID}</td>
      <td onClick={() => openEdit(item.ID)}>{item.LoaiNhanVien}</td>
      {edit && editingId === item.ID && ( 
        <div className='overlay'>
          <div className='insert'>
            <div className='insert-insert'>
              <div className="title-insert">
                Cập Nhật Loại Nhân Viên
              </div>
              <div className="input-insert">
                <input type="text" onChange={handleChange} value={employeeTypeData.LoaiNhanVien} name="LoaiNhanVien" />
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
      <ToastContainer />
    </div>
  );
}

export default EmployeeType;

