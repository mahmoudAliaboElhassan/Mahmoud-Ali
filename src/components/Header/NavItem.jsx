export const NavItem = ({ href, children, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white shadow-lg"
        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
    }`}
  >
    {children}
  </button>
);
