import { Link } from "@inertiajs/react";

export default function Layout({children}) {
    return (
        <div className="mx-auto">
            <header>
                <nav className="p-4 shadow-md">
                    <div className="max-w-6xl mx-auto flex justify-between items-center">

                        <div className="space-x-4">
                            <Link className="text-white hover:text-indigo-300 transition-colors" href="/brands">Brand</Link>
                            <Link className="text-white hover:text-indigo-300 transition-colors" href="/outlets">Outlet</Link>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="p-6">
                {children}
            </main>
        </div>
    );
}
