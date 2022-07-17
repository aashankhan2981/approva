import React, { Fragment, useContext } from "react";
import { Popover, Transition } from '@headlessui/react'

import Link from "next/link";
import { AuthenticationContext } from "../../../contexts";
import { SidebarDashboard } from "../sidebar";
import { BookmarkAltIcon, CalendarIcon, ChartBarIcon, CursorClickIcon, MenuIcon, ShieldCheckIcon, SupportIcon, ViewGridIcon, XIcon } from "@heroicons/react/outline";

export function NavBar() {
  const user = useContext(AuthenticationContext)

  const aboutUsScrollFunc = () => {
    window.scrollTo(200, 2800)
  }

  return (
    <>
      <Popover className="relative bg-white w-1/1 ">
        <div className=" my-5 mx-3 rounded-xl bg-[#1d72e8]/[.05] px-4">
          <div className="flex justify-between items-center py-6 lg:justify-start">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a >
                  <img
                    className="h-8 w-50 sm:h-10"
                    src='/imgs/landing/logo.svg'
                    alt=""
                  />
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 ">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-400 hover:text-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-[14px]">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-50">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-400 hover:text-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {AboutUs.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                            <span className="ml-3 text-[14px] font-medium text-900">{item.name}</span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <a href="#" className="text-[14px] font-medium text-900 hover:text-gray-700">
                        Pricing
                      </a>

                      <a href="#" className="text-[14px] font-medium text-900 hover:text-gray-700">
                        Docs
                      </a>
                      {resources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium text-900 hover:text-gray-700"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div>
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Sign up
                      </a>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?{' '}
                        <a href="#" className="text-indigo-600 hover:text-indigo-500">
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </div>
          <SidebarDashboard />
        </div>
      </Popover>
    </>
  );
}

const AboutUs = [
  {
    name: 'How it works',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Reviews',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Contact us',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]