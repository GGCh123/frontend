'use client';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const [tokenState, setToken] = useState("");

  useEffect(() => {
    // Read token on mount
    const token = localStorage.getItem("token");
    setToken(token);

    // Listen for storage changes (including custom event)
    const handleStorage = () => {
      setToken(localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/login");
    window.dispatchEvent(new Event("storage")); // Notify other tabs/components
  };

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
            {tokenState ? (
              <li className="nav-item">
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="btn btn-outline-danger ms-2"
                >
                  <i className="bi bi-box-arrow-right"></i> SignOut
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link href="/login" className="btn btn-outline-primary me-2">
                    <i className="bi bi-box-arrow-in-right"></i> SignIn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/register" className="btn btn-outline-success">
                    <i className="bi bi-person-plus"></i> SignUp
                  </Link>
                </li>
              </>
            )}
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
