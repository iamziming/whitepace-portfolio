import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="bg-dark text-white w-full sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-10 h-[92px] flex items-center justify-between">
                {/* Left: Logo */}
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>

                {/* Middle: Links */}
                <div className="hidden lg:flex items-center gap-8">
                    <NavLink text="Products" />
                    <NavLink text="Solutions" />
                    <NavLink text="Resources" />
                    <NavLink text="Pricing" />
                </div>

                {/* Right: Buttons */}
                <div className="hidden lg:flex items-center gap-6">
                    <button className="bg-accent text-dark font-medium px-10 py-4 rounded-lg hover:opacity-90 transition-opacity">
                        Login
                    </button>
                    <button className="bg-primary text-white font-medium px-6 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                        Try Whitepace free
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L12 6M12 6L7 11M12 6H0" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

// Helper component for the navigation links with the downward chevron
function NavLink({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="font-medium text-[18px]">{text}</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}
