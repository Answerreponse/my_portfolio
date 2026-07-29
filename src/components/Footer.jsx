/*function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Reponse Isabwe. All rights reserved.</p>
    </footer>
  );
}

export default Footer; */

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="text-center">
        <p>
          © {new Date().getFullYear()} Reponse Isabwe.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;