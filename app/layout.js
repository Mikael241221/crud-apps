import Navbar from 'components/Navbar.js';
import './globals.css'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-[100vh] flex flex-col'>
        <Navbar />
        <main className="flex-1 p-3">{children}</main>
      </body>
    </html>
  );
}
