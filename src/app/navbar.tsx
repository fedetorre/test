'use client';

import {usePathname} from 'next/navigation';
import {Dialog, Transition} from '@headlessui/react';
import {Bars3Icon, ShoppingBagIcon, XMarkIcon} from '@heroicons/react/24/outline';
import {Fragment, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEcommerce from "@/hooks/useEcommerce";

export interface NavbarProps {
  categories: string[]
}

export default function Navbar({categories}: NavbarProps) {
  // STATE
  const [menuOpen, setMenuOpen] = useState(false);
  
  // HOOKS
  const {state} = useEcommerce();

  return (
    <header className={`inset-x-0 top-0 z-50 w-full fixed bg-white`}>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Next ECOMMERCE</span>
            <Image className="h-8 w-auto" src="/next.svg" alt="Next ECOMMERCE" width="56" height="56"></Image>
          </Link>
        </div>
        <div className="flex">
          <Link href="/cart" className="p-3 relative">
            <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
            {state.items.length > 0 ? <span className="absolute top-0 right-0 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">{state.items.length}</span> : null}
          </Link>
          <button
            type="button"
            className="p-3 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
            onClick={() => setMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Transition
          show={menuOpen}
          enter="transition duration-200 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
          as="div"
      >
        <Dialog as="div" open={menuOpen} onClose={setMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Next ECOMMERCE</span>
                <Image
                    width="56"
                    height="56"
                  className="h-8 w-auto"
                  src="/next.svg"
                  alt="Next ECOMMERCE"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/category/${category}`}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </header>
  );
}
