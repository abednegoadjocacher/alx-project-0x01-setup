import Link from 'next/link'; 

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Daily Contents. All rights reserved.
                </p>
                <p className="text-sm mt-2">
                    <Link href="/about" className="hover:underline">About Us</Link> | <Link href="/contact" className="hover:underline">Contact</Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;