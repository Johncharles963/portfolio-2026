// app/components/Layout/Layout.tsx
import { Outlet } from 'react-router';
import { NavBar } from '../NavBar/Navbar';
import { Footer } from '../Footer/Footer';

export default function Layout() {
    return (
        <div className="min-h-screen w-full bg-slate-50 flex flex-col gap-10 justify-between">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:rounded focus:bg-white focus:px-4 focus:py-2"
            >
                Skip to main content
            </a>
            <NavBar />
            <main id="main-content" className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}