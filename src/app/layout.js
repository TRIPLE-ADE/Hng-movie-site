import './globals.css'
import { DM_Sans } from 'next/font/google'
import styles from './style'

const dm_sans = DM_Sans({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Movie Site',
  description: 'HNG Movie Site Task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
          <main className={`${styles.boxWidth} min-h-screen`}>
            {children}
          </main>
      </body>
    </html>
  )
}
