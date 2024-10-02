
import Navbar from "./component/Navbar/Navbar"; 
import Home from "./page/Home/Home";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import Personal from "./page/Personnal/Personal";
import { useState } from "react";
import Employee from "./page/Employee/Employee";
import EmployeeDetail from "./page/Employee/Detail/EmployeeDetail"; 
import "./index.css";
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import Login from "./page/Login/Login";
import Insert from "./page/Employee/Insert/insert";
import EmployeeType from "./page/Employee/Type/EmployeeType";
import Branch from "./page/Branch/Branch";
import Department from "./page/Department/Department";
import EmployeeTitle from "./page/Employee/Tilte/EmployeeTitle";
import EmployeeLevel from "./page/Employee/Level/EmployeeLevel";
import EmployeeGroup from "./page/Employee/Group/EmployeeGroup";
import EmployeeHealthInsurance from "./page/Employee/HealthInsurance/EmployeeHealthInsurance"
const App = () => {
  const location = useLocation();
  const isEmployeeRoute = location.pathname === '/app/employee';
  const isEmployeeType = location.pathname === '/app/employee_type';
  const isBranch = location.pathname === '/app/branch';
  const isDepartment = location.pathname === '/app/departments';
  const isEmployeeTitle = location.pathname === '/app/employee_title';
  const isEmployeeLevel = location.pathname === '/app/employee_level';
  const isEmployeeGroup = location.pathname === '/app/employee_group';
  const isEmployeeHealthInsurance = location.pathname === '/app/employee_HealthInsurance';
  const isEmployeeDetailRoute = location.pathname.startsWith('/employee/');
  const [menu, setMenu] = useState("Trang Chủ");
  const [click, setClick] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [path, setPath] = useState("/");
  const [clickLink, setClickLink] = useState(false);
  const [pathshortcut, setPathshortcut] = useState("/");
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isDialogInsertOpen, setIsDialogInsertOpen] = useState(false);

  const handleToggleDialog = () => {
    setIsDialogInsertOpen(!isDialogInsertOpen);
  };

  const handleHeaderClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {}, [isSidebarOpen]);
  useEffect(() => {
    if (isLoginOpen) {
      document.body.classList.add('login-open');
    } else {
      document.body.classList.remove('login-open');
    }
  }, [isLoginOpen]);

  return (
    <>
      {isDialogInsertOpen && (
        <Insert setIsDialogInsertOpen={setIsDialogInsertOpen} />
      )}
      {isLoginOpen && (
        <Login isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} onClose={() => setIsLoginOpen(false)} />
      )}
      <div id="main" className={isLoginOpen ? 'blur' : ''}>
          <Navbar  pathshortcut={pathshortcut} setPathshortcut={setPathshortcut} menu={menu} setMenu={setMenu} path={path} setPath={setPath} clickLink={clickLink} setClickLink={setClickLink} />
        <div id="main">
          <div className="app">
            {!isEmployeeHealthInsurance && !isEmployeeGroup && !isEmployeeLevel && !isEmployeeTitle && !isDepartment && !isBranch && !isEmployeeType &&!isEmployeeRoute && !isEmployeeDetailRoute && (
              <Header   isDialogInsertOpen={isDialogInsertOpen} className="a"  menu={menu} setMenu={setMenu} onHeaderClick={handleHeaderClick} 
              />
            )}
            <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
              { !isEmployeeHealthInsurance && !isEmployeeGroup && !isEmployeeLevel && !isEmployeeTitle && !isDepartment && !isBranch && !isEmployeeType && !isEmployeeRoute && !isEmployeeDetailRoute && isSidebarOpen && (
                <Sidebar  menu={menu} setMenu={setMenu} click={click}setClick={setClick} path={path}setPath={setPath}/>
              )}
              <div className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route  path="/employee"  element={ <Personal  pathshortcut={pathshortcut} setPathshortcut={setPathshortcut} clickLink={clickLink}setClickLink={setClickLink} click={click} setClick={setClick} /> } />
                  <Route path="/app/employee"  element={ <Employee toggleDialog={handleToggleDialog}clickLink={clickLink} setClickLink={setClickLink} open={isSidebarOpen} setOpen={setIsSidebarOpen}onHeaderClick={handleHeaderClick} /> } />
                  <Route path="/employee/:id" element={<EmployeeDetail />} />
                  <Route path="/app/employee_type" element={<EmployeeType />} />
                  <Route path="/app/branch" element={<Branch />} />
                  <Route path="/app/departments" element={<Department/>} />
                  <Route path="/app/employee_title" element={<EmployeeTitle/>} />
                  <Route path="/app/employee_level" element={<EmployeeLevel/>} />
                  <Route path="/app/employee_group" element={<EmployeeGroup/>} />
                  <Route path="/app/employee_HealthInsurance" element={<EmployeeHealthInsurance/>} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

