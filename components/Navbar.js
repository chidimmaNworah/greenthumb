import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import styles from "./style.module.css";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../pages/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../pages/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const containerRef = useRef(null);

  const currentPath = usePathname();

  const isActive = (path) => {
    return currentPath === path ? "text-[#A3F32D]" : "";
  };

  useEffect(() => {
    // Simulate authentication check (replace with actual auth logic)
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
    <nav
      className={`${
        isScrolled ? "bg-white/20 backdrop-blur-md shadow-md" : "bg-transparent"
      } sticky top-0 z-50 transition duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-200">
          Green Thumb
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-200 text-sm font-[family-name:var(--font-geist-mono)">
          <Link
            href="/"
            className={`${isActive(
              "/"
            )} hover:text-green-600 transition duration-300`}
          >
            Homepage
          </Link>
          <Link
            href="/recipes"
            className={`${isActive(
              "/recipes"
            )} hover:text-green-600 transition duration-300`}
          >
            Recipes
          </Link>
          <Link
            href="/blog"
            className={`${isActive(
              "/blog"
            )} hover:text-green-600 transition duration-300`}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className={`${isActive(
              "/about"
            )} hover:text-green-600 transition duration-300`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${isActive(
              "/contact"
            )} hover:text-green-600 transition duration-300`}
          >
            Contact Us
          </Link>
          <Link
            href="/search"
            className={`${isActive(
              "/search"
            )} hover:text-green-600 transition duration-300`}
          >
            Search
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleSignOut}
              className="text-red-500 hover:text-red-700 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/auth/signin"
                className={`${isActive(
                  "/auth/signin"
                )} hover:text-green-600 transition duration-300`}
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className={`${isActive(
                  "/auth/signup"
                )} hover:text-green-600 transition duration-300`}
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden focus:outline-none text-gray-200"
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
          <div className="mx-6" ref={containerRef}>
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
                className={`block px-4 py-2 transition duration-300 text-gray-200 hover:text-[#99E82B] ${isActive(
                  item.href
                )}`}
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
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="block px-4 py-2 text-white transition duration-300 hover:bg-indigo-100 hover:text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="block px-4 py-2 text-white transition duration-300  hover:bg-indigo-100 hover:text-black"
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
