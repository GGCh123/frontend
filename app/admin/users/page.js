'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Page() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // <-- เพิ่ม state loading
  const router = useRouter();

  // Add this function
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setItems(items.filter(item => item.id !== id));
      } else {
        alert('Failed to delete user.');
      }
    } catch (error) {
      alert('Network error.');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
     if (!token) {
       router.push('/login');
       return;
     }

    async function getUsers() {
      try {
        const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
        setLoading(false); // <-- โหลดเสร็จแล้ว
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
 
  getUsers()
  const interval  = setInterval(getUsers, 1000);
  return () => clearInterval(interval);
}, []);

  return (
    <>
    <br /><br /><br /><br />
    <div className="container">
      <div className="card">
  <div className="card-header">
    Users List
  </div>
  <div className="card-body">
  <div className="row">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th className='col-md-1 text-center'>#</th>
            <th className='col-md-2'>Prefix</th>
            <th className='col-md-3'>Firstname</th>
            <th className='col-md-3'>Lastname</th>
            <th className='col-md-3'>Username</th>
            <th className='col-md-4'>Address</th>
            <th className='col-md-2'>Sex</th>
            <th className='col-md-3'>Birthday</th>
            <th className='col-md-1'>Edit</th>
            <th className='col-md-1'>Delete</th>
          </tr>
        </thead>
        <tbody>
  {items.map((item) => (
    <tr key={item.id}>
      <td className='text-center'><div className="d-block">{item.id}</div></td>
      <td><div className="d-block">{item.firstname}</div></td>
      <td><div className="d-block">{item.fullname}</div></td>
      <td><div className="d-block">{item.lastname}</div></td>
      <td><div className="d-block">{item.username}</div></td>
      <td><div className="d-block">{item.address}</div></td>
      <td><div className="d-block">{item.sex}</div></td>
      <td><div className="d-block">{item.birthday}</div></td>
      <td>
        <Link href={`/admin/users/edit/${item.id}`} className="btn btn-warning">Edit</Link>
      </td>
      <td>
        <button
          className="btn btn-pill btn-danger"
          type="button"
          onClick={() => handleDelete(item.id)}
        >
          <i className="fa fa-trash"></i>Del
        </button>
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
    </div>

    </div>
    </div>
    <br /><br />

    </>
  );
}