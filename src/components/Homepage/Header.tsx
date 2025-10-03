


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#080522]">
      <div className="mx-auto px-6">
        <div className="flex h-20 items-center justify-evenly mx-auto">
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-3">
            { <div className="relative">
              <img
                src="/logo.png"
                alt="Treble Logo"
                
                className="w-[200px] object-contain"
              />
            </div> }
           </a>

          {/* Navigation Links */}
          <nav className="flex justify-around p-[5px] items-center gap-8">
            <a
              href="/ecosystem"
              className="text-[rgb(216,226,255)] p-[8px] no-underline hover:text-white transition-colors text-sm font-medium"
            >
              Ecosystem
            </a>
            <a
              href="/roadmap"
              className="text-[rgb(216,226,255)] p-[8px] no-underline hover:text-white transition-colors text-sm font-medium"
            >
              Roadmap
            </a>
            <a
              href="/community"
              className="text-[rgb(216,226,255)] p-[8px] no-underline hover:text-white transition-colors text-sm font-medium"
            >
              Community
            </a>
            <a
              href="/whitepaper"
              className="text-[rgb(216,226,255)] p-[15px] no-underline hover:text-white transition-colors text-sm font-medium"
            >
              Whitepaper
            </a>
            <a
              className="capitalize text-[rgb(255,255,255)] p-[8px] font-bold font-[13px] leading-none tracking-tight px-[15px] py-[15px] rounded-[10px] bg-gradient-to-br from-[#007FFF] to-[#0BF9FF] hover:opacity-90 transition-all duration-[2300ms] border-0"
            style={{
              backgroundImage: "linear-gradient(187deg, rgb(0, 127, 255) 0%, rgb(11, 249, 255) 100%)",
               }}
            >
             
              Launch App
            </a>
          </nav>

          {/* Mobile Menu Button */}
          {/* <button className="md:hidden text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  )
}