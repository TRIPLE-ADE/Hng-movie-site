import './globals.css'
import { Inter } from 'next/font/google'
import styles from './style'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Site',
  description: 'HNG Movie Site Task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <main className={`${styles.boxWidth} min-h-screen ${styles.padding}`}>
            {children}
          </main>
      </body>
    </html>
  )
}
