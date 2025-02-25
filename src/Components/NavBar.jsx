import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, MapPin, Shield, Search, Map, Hospital, 
  LayoutDashboard, Book, AlertOctagon, Bell, 
  User, LogOut, ChevronDown, Settings,
  Phone, ArrowRight, Heart, AlertCircle,
  HelpCircle, Users, ShieldAlert, Headphones,
  Navigation, Clock, UserCircle
} from 'lucide-react';

const Navbar = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: "Safety Alert: Increased incidents reported near Downtown Area",
      time: "10:15 AM",
      type: "alert"
    },
    {
      id: 2,
      text: "New self-defense workshop this weekend",
      time: "Yesterday",
      type: "info"
    },
    {
      id: 3,
      text: "Your emergency contacts have been updated",
      time: "2 days ago",
      type: "update"
    }
  ]);
  
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  // Dropdown menus configuration with women's safety focus
  const dropdownMenus = {
    emergency: {
      title: "Emergency",
      items: [
        { label: "SOS Alert", icon: AlertCircle, path: "/sos", highlight: true },
        { label: "Contact Guardians", icon: Phone, path: "/contact-guardians" },
        { label: "Safe Locations", icon: MapPin, path: "/safe-locations" },
        { label: "Medical Help", icon: Hospital, path: "/medical-help" },
      ]
    },
    resources: {
      title: "Resources",
      items: [
        { label: "Safety Dashboard", icon: LayoutDashboard, path: "/dashboard" },
        { label: "Self-Defense Guides", icon: Shield, path: "/self-defense" },
        { label: "Legal Rights", icon: Book, path: "/legal-rights" },
        { label: "Report Incident", icon: AlertOctagon, path: "/report" },
      ]
    },
    community: {
      title: "Community",
      items: [
        { label: "Support Groups", icon: Users, path: "/support-groups" },
        { label: "Live Safe Map", icon: Map, path: "/safe-map" },
        { label: "Success Stories", icon: Heart, path: "/stories" },
        { label: "Volunteer", icon: HelpCircle, path: "/volunteer" },
      ]
    }
  };

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    // Instead of using navigate, we'll use window.location
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    setSearchQuery('');
  }, [searchQuery]);

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowProfileMenu(false);
      setActiveDropdown(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Escape') {
      setShowProfileMenu(false);
      setActiveDropdown(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // Helper function for navigation without useNavigate
  const navigateTo = (path) => {
    window.location.href = path;
  };

  const renderDropdownMenu = (key, menu) => (
    <div className="relative group">
      <button
        onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
        className="flex items-center space-x-1 hover:text-pink-200 transition-colors py-2"
        aria-expanded={activeDropdown === key}
        aria-haspopup="true"
      >
        <span>{menu.title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
      </button>
      
      {activeDropdown === key && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg py-2 text-gray-800 z-50">
          {menu.items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center px-4 py-2 hover:bg-pink-50 transition-colors ${item.highlight ? 'bg-pink-50 text-pink-600 font-semibold' : ''}`}
              onClick={() => setActiveDropdown(null)}
            >
              <item.icon className={`h-5 w-5 mr-3 ${item.highlight ? 'text-pink-600' : 'text-pink-500'}`} />
              <span>{item.label}</span>
              <ArrowRight className="h-4 w-4 ml-auto text-gray-400" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg">
      {/* SOS Button - Fixed at top right */}
      <div className="fixed right-4 top-4 z-50 hidden md:block">
        <button 
          onClick={() => navigateTo('/sos')}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full 
                   shadow-lg transition-all duration-200 flex items-center space-x-2 
                   animate-pulse hover:animate-none"
          aria-label="Emergency SOS"
        >
          <Phone className="h-5 w-5" />
          <span>SOS</span>
        </button>
      </div>
      
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center justify-between w-full md:w-auto mb-3 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <ShieldAlert className="h-6 w-6 text-white" />
              <span className="text-xl font-bold">SafeHer</span>
            </Link>
            <div className="flex md:hidden items-center space-x-3">
              <button 
                onClick={() => navigateTo('/sos')}
                className="bg-red-500 p-2 rounded-full"
                aria-label="SOS"
              >
                <Phone className="h-5 w-5" />
              </button>
              <button 
                className="text-white text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? '×' : '≡'}
              </button>
            </div>
          </div>

          {/* Search */}
          <form onSubmit={handleSearch} className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto md:mx-4 mb-3 md:mb-0`}>
            <div className="relative" ref={searchRef}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find safe locations, resources..."
                className="w-full md:w-64 px-4 py-2 pl-10 pr-8 rounded-lg bg-purple-500 bg-opacity-50 
                         text-white placeholder-purple-200 focus:outline-none focus:ring-2 
                         focus:ring-pink-300 focus:bg-purple-400 transition-all duration-200"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-purple-200" />
              {searchQuery && (
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-1 text-sm bg-pink-600 rounded hover:bg-pink-700 
                           transition-colors duration-200"
                >
                  <Search className="h-4 w-4" />
                </button>
              )}
            </div>
          </form>

          {/* Navigation Links with Dropdowns */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-6 w-full md:w-auto`} ref={dropdownRef}>
            {Object.entries(dropdownMenus).map(([key, menu]) => renderDropdownMenu(key, menu))}
            
            {/* Quick Access */}
            <Link to="/safety-tracker" className="flex items-center space-x-2 hover:text-pink-200 transition-colors">
              <Clock className="h-5 w-5" />
              <span>Safety Tracker</span>
            </Link>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === "notifications" ? null : "notifications")}
                className="relative flex items-center hover:text-pink-200 transition-colors"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>

              {activeDropdown === "notifications" && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 text-gray-800 z-50">
                  <div className="px-4 py-2 border-b border-gray-100 font-semibold flex justify-between items-center">
                    <span>Notifications</span>
                    <span className="text-xs text-pink-600 cursor-pointer">Mark all as read</span>
                  </div>
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-l-4 border-pink-500">
                        <div className="flex items-start">
                          <span
                            className={`h-2 w-2 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                              notification.type === "alert"
                                ? "bg-red-500"
                                : notification.type === "update"
                                ? "bg-blue-500"
                                : "bg-green-500"
                            }`}
                          />
                          <div className="flex-1">
                            <p className="text-sm">{notification.text}</p>
                            <span className="text-xs text-gray-500">{notification.time}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center py-4 text-sm text-gray-500">No new notifications</p>
                  )}
                  <div className="px-4 py-2 border-t border-gray-100">
                    <Link to="/all-notifications" className="text-sm text-pink-600 hover:text-pink-800">
                      View All Notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="relative">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center space-x-2 hover:text-pink-200 transition-colors"
                    aria-expanded={showProfileMenu}
                    aria-haspopup="true"
                  >
                    <div className="h-8 w-8 rounded-full bg-pink-800 flex items-center justify-center">
                      {user.firstName?.[0] || "U"}
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
                  </button>

                  {showProfileMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-gray-800 z-50">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="font-medium">{user.firstName || "User"} {user.lastName || ""}</p>
                        <p className="text-xs text-gray-500">{user.email || "user@example.com"}</p>
                      </div>
                      <Link to="/profile" className="flex items-center px-4 py-2 hover:bg-pink-50">
                        <User className="h-4 w-4 mr-2 text-pink-500" />
                        My Profile
                      </Link>
                      <Link to="/my-guardians" className="flex items-center px-4 py-2 hover:bg-pink-50">
                        <Users className="h-4 w-4 mr-2 text-pink-500" />
                        My Guardians
                      </Link>
                      <Link to="/settings" className="flex items-center px-4 py-2 hover:bg-pink-50">
                        <Settings className="h-4 w-4 mr-2 text-pink-500" />
                        Settings
                      </Link>
                      <button
                        onClick={() => {
                          /* Implement logout */
                          window.location.href = '/login';
                        }}
                        className="flex items-center w-full px-4 py-2 hover:bg-pink-50 text-red-600"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => navigateTo('/login')}
                  className="flex items-center space-x-2 bg-white text-pink-700 px-4 py-2 rounded-lg 
                           hover:bg-gray-100 transition-colors"
                >
                  <UserCircle className="h-5 w-5" />
                  <span>Sign In</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile SOS Button - Fixed bottom */}
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <button 
          onClick={() => navigateTo('/sos')}
          className="bg-red-500 hover:bg-red-600 text-white font-bold p-4 rounded-full 
                   shadow-lg transition-all duration-200 flex items-center justify-center"
          aria-label="Emergency SOS"
        >
          <Phone className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;