import { Shield, Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-green-900/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-xl font-bold">Sentinel</span>
            </div>
            <p className="text-green-400 mb-4">The ultimate firewall for smart contracts.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-500 hover:text-green-400">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-500 hover:text-green-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-500 hover:text-green-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-400 hover:text-green-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-green-400 hover:text-green-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-green-400 hover:text-green-300">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-green-400 hover:text-green-300">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-400 hover:text-green-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-green-400 hover:text-green-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-green-400 hover:text-green-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-green-400 hover:text-green-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-400 hover:text-green-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-green-400 hover:text-green-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-green-400 hover:text-green-300">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-900/50 mt-12 pt-8 text-center text-green-400">
          <p>© {new Date().getFullYear()} Sentinel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

