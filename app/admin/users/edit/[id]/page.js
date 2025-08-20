'use client'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { useParams, useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const params = useParams();
  const id = params.id;

  const [firstname, setFirstname] = useState('')
  const [fullname, setFullname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [birthday, setBirthday] = useState('')
  const [sex, setSex] = useState('')
  const [address, setAddress] = useState('')
  const [items, setItems] = useState([]);
    useEffect(() => {
        async function getUsers() {
          try {
            const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`);
            if (!res.ok) {
              console.error('Failed to fetch data');
              return;
            }
            const data = await res.json();
            setItems(data);

        //กำหนดค่า state เริ่มต้นจาก API
        if (data.length > 0) {
          const user = data[0];
          setFirstname(user.firstname || '');
          setFullname(user.fullname || '');
          setLastname(user.lastname || '');
          setUsername(user.username || '');
          setPassword(user.password || '');
          setBirthday(user.birthday || '');
          setSex(user.sex || '');
          setAddress(user.address || '');
        }

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
     
      getUsers();
      //const interval  = setInterval(getUsers, 1000);
      //return () => clearInterval(interval);
    }, []);
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
      method: 'PUT',
      headers: {
        Accept : 'application/json',
      },
      body: JSON.stringify({ id, firstname, fullname, lastname, username, password, birthday, sex, address }),
    })
    const result = await res.json();
    console.log(result);
    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: '<h3>ปรับปรุงข้อมูลเรียบร้อยแล้ว</h3>',
        showConfirmButton: false,
        timer: 2000
        }).then(function () {
        router.push('/register')
      });
      setFirstname('')
      setFullname('')
      setLastname('')
      setUsername('')
      setPassword('')
      setBirthday('')
      setSex('')
      setAddress('')
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'เกิดข้อผิดพลาด!',
        icon: 'error',
        confirmButtonText: 'ตกลง'
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'ข้อผิดพลาดเครือข่าย',
      text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
    })
  }
  }
  return (
    <div className="container d-flex justify-content-center mt-5 mb-">
      {items.map((item) => (
      <form key={item.id} onSubmit={handleUpdateSubmit} className="row g-3 shadow-lg rounded p-5 bg-white w-100" style={{ maxWidth: "800px" }} >
        <h1 className="text-center mb-4 text-primary fw-bold">แก้ไขข้อมูล {id}</h1>

        <div className="col-12">
          <label htmlFor="inputUsername" className="form-label">Username</label>
          <input type="text" 
          className="form-control" 
          defaultValue={item.username}
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input 
          type="password" 
          className="form-control" 
          defaultValue={item.password}
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputFirstname" className="form-label">คำนำหน้าชื่อ</label>
          <select 
          className="form-select" 
          defaultValue="default" 
          value={firstname} 
          onChange={e => setFirstname(e.target.value)}
          >
            <option value="{item.firstname}">{item.firstname}</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
            <option value="ไม่ระบุ">ไม่ระบุ</option>
          </select>
        </div>
        <div className="col-md-5">
          <label htmlFor="inputText4" className="form-label">ชื่อ</label>
          <input 
          type="text" 
          className="form-control" 
          defaultValue={item.fullnamename}
          placeholder="ชื่อ" 
          value={fullname}
          onChange={e => setFullname(e.target.value)}
          />
        </div>
        <div className="col-5">
          <label htmlFor="inputAddress" className="form-label">นามสกุล</label>
          <input 
          type="text" 
          className="form-control" 
          defaultValue={item.lastname}
          placeholder="นามสกุล" 
          value={lastname}
          onChange={e => setLastname(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputDate" className="form-label">วันเกิด</label>
          <input 
          type="date" 
          className="form-control" 
          defaultValue={item.birthday}
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputGender" className="form-label">เพศ</label>
          <select
            defaultValue={item.sex}
            className="form-select"
            value={sex}
            onChange={e => setSex(e.target.value)}
          >
            <option value="{item.sex}">{item.sex}</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
            <option value="เพศทางเลือก">เพศทางเลือก</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input 
          type="text" 
          className="form-control" 
          defaultValue={item.address}
          placeholder="ที่อยู่"
          value={address}
          onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success w-100">ปรับปรุงข้อมูล</button>
        </div>
      </form>
      ))}
    </div>
  );
}