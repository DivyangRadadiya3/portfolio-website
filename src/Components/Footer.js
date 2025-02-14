import React, { useMemo } from "react";

const Footer = React.memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
    </footer>
  );
});

export default Footer;
