const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 px-6 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between text-sm">
        
        {/* Left */}
        <p>© {new Date().getFullYear()} Employee Management</p>

        {/* Right */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;