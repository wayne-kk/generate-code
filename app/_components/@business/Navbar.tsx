'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ThemeToggleSwitch from '@/_components/@theme/ThemeToggleSwitch';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/_components/@ui/menubar";
import { Button } from "@/_components/@ui/button";
import { Avatar, AvatarFallback } from "@/_components/@ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/_components/@ui/sheet";
import { Menu } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Clear user from local storage
        localStorage.removeItem('user');
        setUser(null);
        
        // Redirect to login page
        router.push('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-1 bg-background/95 backdrop-blur-sm shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Generate Code
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex">
              <Menubar className="border-none bg-transparent">
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer data-[state=open]:bg-transparent focus:bg-transparent">
                    <Link href="/" className="text-muted-foreground hover:text-foreground">
                      Home
                    </Link>
                  </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer data-[state=open]:bg-transparent focus:bg-transparent">
                    <Link href="/generate" className="text-muted-foreground hover:text-foreground">
                      Generate
                    </Link>
                  </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer data-[state=open]:bg-transparent focus:bg-transparent">
                    <Link href="/blocks" className="text-muted-foreground hover:text-foreground">
                      Blocks
                    </Link>
                  </MenubarTrigger>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>

          {/* Desktop User Menu */}
          <div className="hidden sm:flex sm:items-center gap-2">
            <ThemeToggleSwitch />

            {user ? (
              <Menubar className="border-none bg-transparent">
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer p-0 focus:bg-transparent">
                    <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
                      <AvatarFallback>
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </MenubarTrigger>
                  <MenubarContent align="end" className="w-56">
                    <div className="px-2 py-1.5">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                    <MenubarSeparator />
                    <MenubarItem asChild>
                      <Link href="/profile" className="cursor-pointer">
                        Profile
                      </Link>
                    </MenubarItem>
                    <MenubarItem onClick={handleLogout} className="cursor-pointer">
                      Sign out
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            ) : (
                <div className="flex items-center gap-2">
                  <Button variant="ghost" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register">Register</Link>
                  </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <ThemeToggleSwitch />
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="sm:max-w-sm">
                <div className="flex flex-col h-full">
                  <div className="py-4 space-y-2">
                    <Link
                      href="/" 
                      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/generate" 
                      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      Generate
                    </Link>
                    <Link
                      href="/blocks" 
                      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      Blocks
                    </Link>
                  </div>

                  <div className="mt-auto border-t pt-4">
                    {user ? (
                      <div className="space-y-4">
                        <div className="flex items-center px-3">
                          <Avatar className="h-10 w-10 bg-primary text-primary-foreground">
                            <AvatarFallback>
                              {user.name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="ml-3">
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <Link
                            href="/profile"
                            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent"
                            onClick={() => setIsSheetOpen(false)}
                          >
                            Profile
                          </Link>
                          <Button
                            variant="ghost"
                            className="w-full justify-start px-3 py-2 h-auto font-medium text-sm"
                            onClick={() => {
                              handleLogout();
                              setIsSheetOpen(false);
                            }}
                          >
                            Sign out
                          </Button>
                        </div>
                      </div>
                    ) : (
                        <div className="space-y-2 px-3">
                          <Button variant="outline" className="w-full" asChild>
                            <Link
                              href="/login"
                              onClick={() => setIsSheetOpen(false)}
                            >
                              Login
                            </Link>
                          </Button>
                          <Button className="w-full" asChild>
                            <Link
                              href="/register"
                              onClick={() => setIsSheetOpen(false)}
                            >
                              Register
                            </Link>
                          </Button>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
