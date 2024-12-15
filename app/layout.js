import Navbar from 'components/Navbar.js';
import './globals.css'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-[100h]'>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
