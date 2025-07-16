export default function Register() {
  return (
    <div className="container d-flex justify-content-center mt-5 mb-5">
      <form className="row g-3 shadow-lg rounded p-5 bg-white w-100" style={{ maxWidth: "800px" }}>
        <h2 className="text-center mb-4 text-primary fw-bold">สมัครสมาชิก</h2>

        <div className="col-12">
          <label htmlFor="inputUsername" className="form-label">Email</label>
          <input type="text" className="form-control" id="inputUsername" placeholder="Username" />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail" placeholder="name@gmail, yahoo, hotmail.com" />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword" />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputPrefix" className="form-label">คำนำหน้าชื่อ</label>
          <select id="inputPrefix" className="form-select" defaultValue="default">
            <option value="default" disabled>...</option>
            <option value="male">นาย</option>
            <option value="female">นางสาว</option>
            <option value="none">ไม่ระบุ</option>
          </select>
        </div>
        <div className="col-md-5">
          <label htmlFor="inputText4" className="form-label">ชื่อ</label>
          <input type="text" className="form-control" id="inputText4" placeholder="ชื่อ" />
        </div>
        <div className="col-5">
          <label htmlFor="inputAddress" className="form-label">นามสกุล</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="นามสกุล" />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputDate" className="form-label">วันเกิด</label>
          <input type="date" className="form-control" id="inputDate" />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputGender" className="form-label">เพศ</label>
          <select id="inputGender" className="form-select" defaultValue="default">
            <option value="default" disabled>...</option>
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
            <option value="transgender">เพศทางเลือก</option>
            <option value="none">ไม่ระบุ</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity" />
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
          <button type="submit" className="btn btn-success w-100">ลงทะเบียน</button>
        </div>
      </form>
    </div>
  );
}
