import Link from 'next/link'; 

const NonHomeHeader = () => (
    <header className = "bg-white shadow-sm fixed top-0 left-0 w-full z-10">
        <nav className = "container mx-auto flex justify-between items-center py-4 px-6">
            <Link href="/" className="text-2xl text-gray-900 hover:underline">Alan Wu</Link>
            <ul className="flex space-x-6 text-gray-700">
                <li><Link href="/" className="hover:underline">Home</Link></li>
            </ul>
        </nav>
    </header>
);

export default NonHomeHeader;