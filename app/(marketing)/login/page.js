'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Swal from 'sweetalert2'


export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    console.log(username);

    if (data.token) {
    localStorage.setItem('token', data.token);  
    window.dispatchEvent(new Event('storage')); // Notify other components
    Swal.fire({
        icon: 'success',
        title: '<h3>Login Successfuly!</h3>',
        showConfirmButton: false,
        timer: 2000
        }).then(function () {
        window.location.href = "/admin/users";
      });
    } else {
      
    Swal.fire({
        icon: 'warning',
        title: '<h3>Login Failed!</h3>',
        showConfirmButton: false,
        timer: 2000
        }).then(function () {
          router.push('/login');
      });
 
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center mt-5 mb-5">
        <form className="w-100 shadow-lg rounded p-5 bg-white" style={{ maxWidth: "700px" }} onSubmit={handleLogin}>
          <h1 className="text-center fw-bold text-primary mb-4" style={{ fontSize: "2rem" }}>
            ลงชื่อเข้าใช้
          </h1>

          <div className="row mb-3">
            <label className="col-form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
              <input type="text" className="form-control" id="formGroupExampleInput" defaultValue={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            </div>
          </div>

          <div className="row mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3"><i className="bi bi-lock"></i></span>
              <input type="password" className="form-control" id="formGroupExampleInput2" defaultValue={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                <label className="form-check-label" htmlFor="gridCheck1">
                  จดจำรหัสผ่าน
                </label>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-12">
              <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#0080FF", borderColor: "#0080FF" }}>Sign in</button>
            </div>
          </div>

          {/* ลิงก์ลืมรหัสผ่านและลงทะเบียน */}
          <div className="text-center">
            <p className="mb-1">
              <Link href="/forgot-password" className="text-decoration-none text-secondary">
                ลืมรหัสผ่าน?
              </Link>
            </p>
            <p>
              ยังไม่มีบัญชี?{" "}
              <Link href="/register" className="text-decoration-none text-primary fw-bold">
                ลงทะเบียน
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
