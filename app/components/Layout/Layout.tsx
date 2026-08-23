// app/components/Layout/Layout.tsx
import { Outlet } from 'react-router';
import { NavBar } from '../NavBar/Navbar';
import { Footer } from '../Footer/Footer';

export default function Layout() {
    return (
        <div className={` min-h-screen w-full bg-slate-50 flex flex-col gap-10 justify-between`}>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
}