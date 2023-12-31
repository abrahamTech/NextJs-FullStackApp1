import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '../context/ThemeContext';

import AuthProvider from '@/components/AuthProvider/AuthProvider';

const inter = Inter({ subsets: ['latin'] });
//New Font fromm Google Fonts (Use in the html return -> <body className={poppins.className}>)
const poppins = Poppins({ weight: "400", subsets: ['latin']});

export const metadata = {
  title: 'AbrahamTech App',
  description: 'This is my personal portfolio created with NextJs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ThemeProvider>
          
          <AuthProvider>

          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
