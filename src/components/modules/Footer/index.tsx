import Iconify from "@/components/elements/Iconify";

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 bg-white shadow-lg w-full text-center">
            <p className="text-gray-600 p-2 flex items-center gap-2 justify-center">
                <Iconify icon="ph:lightning" />
                <span>
                    Powered by <a
                    className="text-bold text-blue-600 hover:underline"
                    href="https://vertocode.com"
                    target="_blank"
                    rel="noopener noreferrer">Vertocode</a>
                </span>
            </p>
        </footer>
    )
}