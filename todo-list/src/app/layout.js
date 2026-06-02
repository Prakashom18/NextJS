import './globals.css'
export default function RootLayout({children}){
  return(
    <html>
      <body>
        <nav className='bg-black text-white p-4'>
          <h1>This is a navigation. </h1>
        </nav>
       {children}
        <footer className="bg-black text-white p-4">
          This is a footer.
        </footer>
      </body>
    </html>

  )

}