import { useEffect, useState } from "react";
import { Outlet, useNavigate, Link } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "~/lib/firebase/config";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function AdminLayout() {
  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setChecking(false);
      } else {
        navigate("/admin/login");
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-gray-400 font-[300]">Checking authentication...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link to="/admin/blog/list" className="font-[300] text-lg tracking-wide">
          <span className="text-[--primary-color]">Easy Hom 1969</span>{" "}
          <span className="text-gray-400 font-[200]">| Admin</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm font-[300]">{user?.email}</span>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer font-[300]"
          >
            <FaArrowRightFromBracket className="text-xs" />
            Sign Out
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
