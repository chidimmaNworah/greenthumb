import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import styles from "./style.module.css";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const containerRef = useRef(null);

  useEffect(() => {
    // Simulate authentication check (replace with actual auth logic)
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    enqueueSnackbar("You have been signed out", {
      variant: "error",
      preventDuplicate: true,
      autoHideDuration: 3000,
    });
    router.push("/auth/signin");
  };

  const scrollContainer = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; // Adjust scroll amount
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-green-700">
          Green Thumb
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/" className="hover:text-green-600">
            Homepage
          </Link>
          <Link href="/recipes" className="hover:text-green-600">
            Recipes
          </Link>
          <Link href="/blog" className="hover:text-green-600">
            Blog
          </Link>
          <Link href="/about" className="hover:text-green-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-green-600">
            Contact Us
          </Link>
          <Link href="/search" className="hover:text-green-600">
            Search
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleSignOut}
              className="text-red-500 hover:text-red-700"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link href="/auth/signin" className="hover:text-green-600">
                Sign In
              </Link>
              <Link href="/auth/signup" className="hover:text-green-600">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden focus:outline-none text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobile_menu}>
          <button
            className={`${styles.artwork_nav} ${styles.artwork_nav__left}`}
            onClick={() => scrollContainer("left")}
          >
            &#8592;
          </button>
          <div className="" ref={containerRef}>
            {[
              { href: "/", label: "Homepage" },
              { href: "/recipes", label: "Recipes" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
              { href: "/search", label: "Search" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <button
                onClick={() => {
                  handleSignOut();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-100"
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="block px-4 py-2 hover:bg-indigo-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="block px-4 py-2 hover:bg-indigo-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
          <button
            className={`${styles.artwork_nav} ${styles.artwork_nav__right}`}
            onClick={() => scrollContainer("right")}
          >
            &#8594; {/* Right arrow */}
          </button>
        </div>
      )}
    </nav>
  );
}
