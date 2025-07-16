import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">Logo</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">หน้าแรก</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link active">เกี่ยวกับ</Link>
            </li>
            <li className="nav-item">
              <Link href="/service" className="nav-link active">บริการของเรา</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link active">ติดต่อ</Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="nav-link active">ลงชื่อเข้าใช้</Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
