import Link from 'next/link';
const Header: React.FC = () => {
return (
    <header className="bg-gray-800 text-white py-4">
        <div className="flex items-center">
            <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2x1 font-bold"> ImageGen</h1>
        </div>
        <nav className="space-x-4">
            <link href="/" className="hover:text-gray-400">Home</link>
            <link href="/gallery" className="hover: text-gray-400">Gallery</link>
            <link href="/about" className="hover: text-gray-400">About</link>
            <link href="/contact" className="hover: text-gray-400">Contact</link>
        </nav>
        </div>
    </header>
);
}
export default Header;