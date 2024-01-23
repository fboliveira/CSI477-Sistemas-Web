import Link from "next/link";

export default function Menu() {

    return(
        <nav className="bg-gray-800">
            <div className="flex space-x-4">
                <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</Link>
                <Link href="/estados" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Estados</Link>
            </div>
        </nav>
    )

}