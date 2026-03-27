import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Lock, LogOut, Calendar, User, Phone, Mail, Clock, MessageSquare, Trash2 } from 'lucide-react';
import { getVisitSchedules, deleteVisitSchedule } from '../../lib/supabaseClient';
import type { VisitSchedule } from '../../lib/supabaseClient';



export function AdminPortal() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [schedules, setSchedules] = useState<VisitSchedule[]>([]);
  const [error, setError] = useState('');

  // Admin password (in production, this should be handled by backend)
  const ADMIN_PASSWORD = 'admin123';

  useEffect(() => {
    // Check if already authenticated in session
    const authStatus = sessionStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      loadSchedules();
    }
  }, []);

  const loadSchedules = async () => {
    try {
      const data = await getVisitSchedules();
      setSchedules(data as any[]);
    } catch (error) {
      console.error('Error loading schedules:', error);
      setSchedules([]);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuthenticated', 'true');
      setError('');
      loadSchedules();
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuthenticated');
    setPassword('');
    navigate('/');
  };

  const handleDelete = async (id: string | number) => {
    if (confirm('Are you sure you want to delete this schedule?')) {
      try {
        await deleteVisitSchedule(String(id));
        const updatedSchedules = schedules.filter(schedule => schedule.id !== id);
        setSchedules(updatedSchedules);
      } catch (error) {
        console.error('Error deleting schedule:', error);
        alert('Failed to delete schedule. Please try again.');
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatDateTime = (isoString: string) => {
    return new Date(isoString).toLocaleString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-sky-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Lock className="text-purple-600" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Portal</h1>
            <p className="text-gray-600">Enter password to access</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Enter admin password"
                required
              />
              {error && (
                <p className="mt-2 text-red-600 text-sm">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-sky-50">
      {/* Header */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Admin Portal</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Scheduled Visits
          </h2>
          <p className="text-gray-600">
            Total Schedules: <span className="font-semibold text-purple-600">{schedules.length}</span>
          </p>
        </div>

        {schedules.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
            <Calendar className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-600">No scheduled visits yet</h3>
            <p className="text-gray-500 mt-2">Visit schedules will appear here when families submit the form.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {schedules.map((schedule) => (
              <div key={schedule.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {schedule.parent_name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Submitted: {formatDateTime(schedule.created_at || new Date().toISOString())}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(schedule.id)}
                    className="text-red-500 hover:text-red-700 transition-colors p-2"
                    title="Delete schedule"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <User className="text-pink-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Child's Name</p>
                      <p className="text-gray-600">{schedule.child_name} ({schedule.child_age} years old)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Email</p>
                      <p className="text-gray-600">Not stored</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="text-sky-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Phone</p>
                      <a href={`tel:${schedule.parent_phone}`} className="text-gray-600 hover:text-purple-600">
                        {schedule.parent_phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Preferred Date</p>
                      <p className="text-gray-600">{formatDate(schedule.preferred_date)}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Preferred Time</p>
                      <p className="text-gray-600">{schedule.preferred_time}</p>
                    </div>
                  </div>

                  {schedule.message && (
                    <div className="flex items-start gap-3 md:col-span-2">
                      <MessageSquare className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Message</p>
                        <p className="text-gray-600">{schedule.message || 'No message'}</p>
                      </div>
                    </div>
                  )}
                  {!schedule.message && (
                    <div className="flex items-start gap-3 md:col-span-2">
                      <MessageSquare className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Message</p>
                        <p className="text-gray-500 italic">No message provided</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
