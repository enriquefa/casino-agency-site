import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="\images\ads-logo-gold.png"
              alt="Ads BlackJack Agency"
              width={120}
              height={35}
              className="h-7 w-auto"
            />
            <span className="text-muted-foreground text-sm">
              Digital Communication
            </span>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#team"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Team
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}Ads BalckJack Agency
          </p>
        </div>
      </div>
    </footer>
  )
}
