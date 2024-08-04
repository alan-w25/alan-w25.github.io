import Link from 'next/link';

const Header = () => (
    <header className = "bg-white shadow-sm fixed top-0 left-0 w-full z-10">
        <nav className = "container mx-auto flex justify-between items-center py-4 px-6">
            <Link href="/"className="text-2xl text-gray-900 hover:underline">Alan Wu</Link>
            <ul className="flex space-x-6 text-gray-700">
                <li><Link href="#about" className="hover:underline">About</Link></li>
                <li><Link href="/projects" className="hover:underline">Projects</Link></li>
                <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;