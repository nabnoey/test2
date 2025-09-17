import React from "react";

const NotAllowed = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-red-200 to-red-100 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
        {/* ไอคอน */}
        <h1 className="text-6xl font-bold text-red-600 mb-4 animate-bounce">🚫</h1>

        {/* ข้อความ */}
        <h2 className="text-3xl font-semibold mb-2 text-gray-800">Access Denied</h2>
        <p className="text-gray-500 mb-6">
          คุณไม่มีสิทธิ์เข้าถึงหน้านี้
        </p>

        {/* ปุ่ม */}
        <a
          href="/"
          className="btn bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          กลับไปหน้าแรก
        </a>
      </div>
    </div>
  );
};

export default NotAllowed;
