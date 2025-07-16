import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center mt-5 mb-5">
        <form className="w-100 shadow-lg rounded p-5 bg-white" style={{ maxWidth: "700px" }}>
          <h1 className="text-center fw-bold text-primary mb-4" style={{ fontSize: "2rem" }}>
            ลงชื่อเข้าใช้
          </h1>

          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" />
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
              <button type="submit" className="btn btn-primary w-100">Sign in</button>
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
