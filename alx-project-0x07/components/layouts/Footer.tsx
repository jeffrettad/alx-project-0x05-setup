import Link from "next/link";
const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <h1 className="text-lg font-semibold">Image Generation App</h1>
                <p className="mt-2 text-sm">© {new Date().getFullYear()}.All right reserve.</p>
                <div className="mt-4">
                    <link href="#" className="text-gray-400 hover:text-whitemx-2">Privacy Policy</link>
                    <link href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</link>
                    <link href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</link>

                </div>
            </div>
        </footer>
    );
};
export default Footer;
