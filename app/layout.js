import './globals.css'


export const metadata = {
  title: 'Tomer Vinyl',
  description: 'Tomers re-record vinylplayer. Sustaiable, practical, good!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
