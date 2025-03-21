import { useEffect, useState } from "react"
import { Home, Briefcase, Code,  Mail } from "lucide-react"

const resume = ()=>{
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-8 h-8"
    >
      <path fill="#f4cc7a" d="M431.917 45.295h-28.146v328.493l-89.921 89.92H105.231v26.074c0 8.049 6.524 14.573 14.573 14.573h312.113c8.05 0 14.574-6.523 14.574-14.573V59.868c0-8.048-6.524-14.573-14.574-14.573z"/>
      <path fill="#f2bb6b" d="M129.29 489.781v-26.073h-24.058v26.074c0 8.049 6.524 14.573 14.573 14.573h24.059c-8.049-.001-14.574-6.525-14.574-14.574zM423.33 388.225c3.07-3.013 4.5-8.243 4.5-12.842V45.295h-24.06v328.493l-89.921 89.92h33.054l76.427-75.483z"/>
      <path fill="#fcd28d" d="M406.77 373.788V22.22c0-8.049-6.524-14.575-14.574-14.575H80.083c-8.049 0-14.574 6.525-14.574 14.575v429.913c0 8.048 6.523 14.573 14.574 14.573H313.85l92.92-92.918z"/>
      <circle fill="#f4cf9d" cx="171.91" cy="109.717" r="24.373"/>
      <path fill="#f23b3b" d="M234.456 189.952c0 8.049-6.523 14.575-14.573 14.575h-95.941c-8.05 0-14.574-6.525-14.574-14.575V64.865c0-8.047 6.523-14.574 14.574-14.574h95.941c8.049 0 14.573 6.526 14.573 14.574v125.087z"/>
      <path fill="#88dce5" d="M194.988 156.353h-46.15c-8.049 0-14.573 6.524-14.573 14.574v33.599h75.296v-33.599c0-8.048-6.525-14.574-14.573-14.574z"/>
      <path d="M139.974 109.628c0 17.584 14.306 31.89 31.889 31.89s31.889-14.306 31.889-31.89c0-17.583-14.306-31.889-31.889-31.889s-31.889 14.306-31.889 31.889zm48.776 0c0 9.313-7.575 16.889-16.888 16.889s-16.888-7.576-16.888-16.889 7.575-16.888 16.888-16.888 16.888 7.576 16.888 16.888z" fill="#000"/>
    </svg>
  )
}

const navItems = [
  { name : "Resume", href:"https://res.cloudinary.com/duqbf6np3/image/upload/v1742397798/Vishal_Resume_gvdkyz.pdf", icon: resume },
  { name: "Home", href: "#home", icon: Home },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
]
export const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col items-center space-y-4 backdrop-blur-2xl p-4 rounded-full">
        {navItems.map((item) => {
          const isActive = activeSection === item.name.toLowerCase();
          const Icon = item.icon;
          return (
            <a key={item.name} href={item.href} className="relative group">
              <div
                className={`p-2 rounded-full ${isActive
                    ? "bg-gray-700 text-white"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                <Icon />
                <span className="sr-only">{item.name}</span>
              </div>
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100">
                <div className="bg-gray-800 px-2 py-1 rounded text-xs whitespace-nowrap text-white">
                  {item.name}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </nav>
  )
}