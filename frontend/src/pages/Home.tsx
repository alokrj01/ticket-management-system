import { Link } from "react-router-dom";
import { useEffect } from "react";
import { HiTicket } from "react-icons/hi";

function Home() {
  useEffect(() => {
    document.title = "TicketFlow - Modern Ticket Management System";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <HiTicket className="text-indigo-600" size={32} />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              TicketFlow
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-slate-700 hover:text-indigo-600 font-medium transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-xl font-medium shadow-lg hover:scale-105 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-36">
          {/* Background Glow */}
          <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-400/20 rounded-full blur-3xl -rotate-12" />

          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-8">
              🚀 Ticket Management System
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-8 leading-tight">
              Modern{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Ticket Management
              </span>{" "}
              Platform
            </h1>

            {/* FIX 1: Added text-center explicitly */}
            <p className="max-w-3xl mx-auto text-center text-lg md:text-2xl text-slate-600 leading-relaxed mb-14">
              Manage support tickets, track issues, collaborate with teams and
              streamline your IT operations from one unified platform.
            </p>

            {/* FIX 2: gap-6 for more space between buttons, px-10 for wider buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                to="/register"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:scale-105 transition"
              >
                Start Free →
              </Link>

              <Link
                to="/login"
                className="bg-white text-slate-800 px-10 py-4 rounded-2xl font-semibold text-lg border border-slate-200 shadow-lg hover:bg-slate-50 transition"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="bg-white/80 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-8">
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-indigo-50 p-5 rounded-2xl">
              <p className="text-slate-500 text-sm">Total Tickets</p>
              <h3 className="text-4xl font-bold text-indigo-600">128</h3>
            </div>

            <div className="bg-green-50 p-5 rounded-2xl">
              <p className="text-slate-500 text-sm">Open</p>
              <h3 className="text-4xl font-bold text-green-600">42</h3>
            </div>

            <div className="bg-yellow-50 p-5 rounded-2xl">
              <p className="text-slate-500 text-sm">In Progress</p>
              <h3 className="text-4xl font-bold text-yellow-500">31</h3>
            </div>

            <div className="bg-red-50 p-5 rounded-2xl">
              <p className="text-slate-500 text-sm">Closed</p>
              <h3 className="text-4xl font-bold text-red-500">55</h3>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6">
            <div className="h-4 bg-slate-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-slate-200 rounded w-full mb-3"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Everything You Need
          </h2>

          <p className="text-xl text-slate-600">
            Powerful features for modern teams
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <div className="text-5xl mb-4">🎫</div>
            <h3 className="text-2xl font-bold mb-3">Ticket Tracking</h3>
            <p className="text-slate-600">
              Track every support request from creation to resolution.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-3">Admin Dashboard</h3>
            <p className="text-slate-600">
              Manage all tickets with role-based access control.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-3">Analytics</h3>
            <p className="text-slate-600">
              Gain insights with statistics, reporting and dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-slate-500">
        © 2026 TicketFlow • Built with React, FastAPI & PostgreSQL
      </footer>
    </div>
  );
}

export default Home;