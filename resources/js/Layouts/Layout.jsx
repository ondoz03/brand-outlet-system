import { Link } from "@inertiajs/react";

export default function Layout({children}) {
    return (
        <div className="mx-auto">
            <header>
                <nav>
                    <Link className="nav-link" href="/">Home</Link>
                    <Link className="nav-link" href="/about">About</Link>
                    <Link className="nav-link" href="/create">Create</Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}
