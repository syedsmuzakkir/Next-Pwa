"use client"

import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import InstallPrompt from './InstallPrompt';

const Header = () => {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const onMenuToggle = () => setOpen(prev => !prev)


    return (
        <div>


                        <header className="relative shadow px-4 py-3 bg-white">
                                <nav className="max-w-7xl mx-auto flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                                <Link href="/" className="flex items-center gap-3">
                                                        <img src='/icons/app-icon.svg' alt='App logo' className='h-10 w-auto' />
                                                        <span className="font-semibold text-lg">Nextmycart</span>
                                                </Link>
                                        </div>

                                                                                                        <div className="hidden md:flex md:items-center md:gap-6">
                                                                                                                        <ul className="flex items-center gap-6">
                                                                                                                                <li className={`pb-2 ${pathname === '/' ? 'text-brand border-b-2 border-brand' : 'text-gray-700'}`}><Link href="/">Home</Link></li>
                                                                                                                                <li className={`pb-2 ${pathname?.startsWith('/faculty') ? 'text-brand border-b-2 border-brand' : 'text-gray-700'}`}><Link href="/faculty">Faculty</Link></li>
                                                                                                                                <li className={`pb-2 ${pathname?.startsWith('/courses') ? 'text-brand border-b-2 border-brand' : 'text-gray-700'}`}><Link href="/courses">Courses</Link></li>
                                                                                                                                <li className={`pb-2 ${pathname?.startsWith('/about') ? 'text-brand border-b-2 border-brand' : 'text-gray-700'}`}><Link href="/about">About</Link></li>
                                                                                                                                <li className={`pb-2 ${pathname?.startsWith('/contact') ? 'text-brand border-b-2 border-brand' : 'text-gray-700'}`}><Link href="/contact">Contact</Link></li>
                                                                                                                        </ul>
                                                                                                        </div>

                                        <div className="flex items-center gap-3">
                                                <InstallPrompt />
                                                <Link href="/login" className="px-4 py-2 rounded-md border border-brand text-white bg-brand">Login</Link>
                                                <button onClick={onMenuToggle} className="md:hidden p-2 rounded-md border border-gray-200">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                                        </svg>
                                                </button>
                                        </div>
                                </nav>

                                {/* Mobile menu */}
                                {open && (
                                                        <div className="md:hidden bg-white border-t border-gray-200">
                                                                                                <ul className="flex flex-col p-4 gap-3">
                                                                                                        <li className={`${pathname === '/' ? 'text-brand' : 'text-gray-700'}`}><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
                                                                                                        <li className={`${pathname?.startsWith('/faculty') ? 'text-brand' : 'text-gray-700'}`}><Link href="/faculty" onClick={() => setOpen(false)}>Faculty</Link></li>
                                                                                                        <li className={`${pathname?.startsWith('/courses') ? 'text-brand' : 'text-gray-700'}`}><Link href="/courses" onClick={() => setOpen(false)}>Courses</Link></li>
                                                                                                        <li className={`${pathname?.startsWith('/about') ? 'text-brand' : 'text-gray-700'}`}><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
                                                                                                        <li className={`${pathname?.startsWith('/contact') ? 'text-brand' : 'text-gray-700'}`}><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
                                                                                                </ul>
                                                                                        </div>
                                )}
                        </header>

        </div>
    )
}

export default Header