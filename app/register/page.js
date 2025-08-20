'use client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

export default function Register() {
  const router = useRouter()

  const [firstname, setFirstname] = useState('')
  const [fullname, setFullname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [birthday, setBirthday] = useState('')
  const [sex, setSex] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
      method: 'POST',
      headers: {
        Accept : 'application/json',
      },
      body: JSON.stringify({ 
        firstname, 
        fullname,
        lastname, 
        username, 
        password, 
        birthday, 
        sex, 
        address 
      }),
    })

    const result = await res.json();
    console.log(result);
    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: '<h3>บันทึกข้อมูลเรียบร้อยแล้ว</h3>',
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
    <div className="container d-flex justify-content-center mt-5 mb-5">
      <form 
        className="row g-3 shadow-lg rounded p-5 bg-white w-100" 
        style={{ maxWidth: "800px" }} 
        onSubmit={handleSubmit}
        >
        <h2 className="text-center mb-4 text-primary fw-bold">สมัครสมาชิก</h2>

        <div className="col-12">
          <label htmlFor="inputUsername" className="form-label">Username</label>
          <input type="text" 
          className="form-control" 
          id="inputUsername" 
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
          id="inputPassword"
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputFirstname" className="form-label">คำนำหน้าชื่อ</label>
          <select 
          id="inputFirstname" 
          className="form-select" 
          defaultValue="default" 
          onChange={e => setFirstname(e.target.value)}
          >
            <option value="default">...</option>
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
          id="inputFullname" 
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
          id="inputLastname" 
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
          id="inputDate" 
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputGender" className="form-label">เพศ</label>
          <select
            id="inputGender"
            className="form-select"
            value={sex}
            onChange={e => setSex(e.target.value)}
          >
            <option value="default">ไม่ระบุ</option>
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
            <option value="transgender">เพศทางเลือก</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input 
          type="text" 
          className="form-control" 
          id="inputAddress" 
          placeholder="ที่อยู่"
          value={address}
          onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              ยอมรับเงื่อนไขการใช้งาน
            </label>
          </div>
        </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#0080FF", borderColor: "#0080FF" }}>
        ลงทะเบียน
        </button>
      </div>
      </form>
    </div>
  );
}
