import React, { useContext } from "react";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'

import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from "next/link";
import { AuthenticationContext } from "../../../contexts";
import UserProfile from "./UserProfile";



export function MainHeader() {
  const user = useContext(AuthenticationContext)

  const aboutUsScrollFunc = () => {
    window.scrollTo(200,2800)
  }

  return (
    <Popover className="relative bg-white">
      <div className="mx-auto m-10 ml-10 mr-10 rounded-xl bg-[#1d72e8]/[.05] px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start">
          <div className="flex justify-start lg:w-0 lg:flex-1" style={{ marginLeft: "20px" }}>
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
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-400 hover:text-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-[14px]">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a href="#" className="text-[14px] font-medium text-500 hover:text-900">
              Overview
            </a>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-900 bg-transparent' : 'text-500 bg-transparent',
                      'group bg-white rounded-md inline-flex items-center text-[14px] font-medium focus:outline-none focus:underline focus:decoration-4 focus:decoration-[#1D72E8] focus:underline-offset-[13px]'
                    )}
                  >
                    <span>About us</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-[#1D72E8]' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-max max-w-2xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <p className="text-left text-[16px] font-medium pl-6 pt-6 text-900">Features</p>

                        <div className="relative grid grid-cols-2 gap-10 bg-white px-5 py-6 sm:gap-8 sm:p-8" onClick={aboutUsScrollFunc}>
                          {AboutUs.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-[#ebeffc]"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-left text-[14px] font-medium text-900">{item.name}</p>
                                <p className="text-left mt-1 text-sm text-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-[14px] font-medium text-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-900 bg-transparent' : 'text-500 bg-transparent',
                      'group bg-white rounded-md inline-flex items-center text-[14px] font-medium focus:outline-none focus:underline focus:decoration-4 focus:decoration-[#1D72E8] focus:underline-offset-[13px]'
                    )}
                  >
                    <span>View rates</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-[#1D72E8]' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-max max-w-2xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <p className="text-left text-[16px] font-medium pl-6 pt-6 text-900">Features</p>

                        <div className="relative grid grid-cols-2 gap-10 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {ViewRates.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-[#ebeffc]"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-left text-[14px] font-medium text-900">{item.name}</p>
                                <p className="text-left mt-1 text-sm text-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-[14px] font-medium text-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-900 bg-transparent' : 'text-500 bg-transparent',
                      'group bg-white rounded-md inline-flex items-center text-[14px] font-medium focus:outline-none focus:underline focus:decoration-4 focus:decoration-[#1D72E8] focus:underline-offset-[13px]'
                    )}
                  >
                    <span>Learn</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-[#1D72E8]' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-max max-w-2xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <p className="text-left text-[16px] font-medium pl-6 pt-6 text-900">Features</p>

                        <div className="relative grid grid-cols-2 gap-10 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {Learn.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-[#ebeffc]"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-left text-[14px] font-medium text-900">{item.name}</p>
                                <p className="text-left mt-1 text-sm text-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-[14px] font-medium text-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>



          </Popover.Group>
          <a href="#" className="mr-[15%] ml-[5%] text-[14px] hidden md:flex font-medium text-500 hover:text-900">
            Find an agent
          </a>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Popover className="relative mr-[3%]">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-[#1C2D41] font-medium bg-transparent' : 'text-[#1C2D41] font-medium bg-transparent',
                      'group bg-white rounded-md inline-flex items-center text-[14px] font-medium focus:outline-none focus:underline focus:decoration-4 focus:decoration-[#1D72E8] focus:underline-offset-[13px]'
                    )}
                  >
                    <span>Calculators</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-[#1D72E8]' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-max max-w-2xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <p className="text-left text-[16px] font-medium pl-6 pt-6 text-900">Features</p>

                        <div className="relative grid grid-cols-2 gap-10 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {Calculators.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-[#ebeffc]">
                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-left text-[14px] font-medium text-900">{item.name}</p>
                                  <p className="text-left mt-1 text-sm text-500">{item.description}</p>
                                </div>
                              </a>
                            </Link>

                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-[14px] font-medium text-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            {
              user == null ?
                <Link href="/auth/signin">
                  <a className="whitespace-nowrap flex items-center justify-center bg-[#fff] p-5 px-6 rounded-md border-2  border-[#fff] text-[14px] font-medium text-500 text-[#1C2D41]">
                    <img className="mr-2" src="https://uploads-ssl.webflow.com/61f7db4b3d99ed1ba00f2f3f/61f7db4c3d99ed0b5b0f2fc4_Google%20sugn%20up.svg" alt="google sign in" />
                    Sign in
                  </a>
                </Link>
                :
                <UserProfile />
            }

            <Link href="/mortgage/new">
              <a
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center p-5 px-6 border border-transparent rounded-md shadow-sm text-[14px] font-medium text-white bg-[#1D72E8] hover:bg-[#1D72E8]/[0.8]"
              >
                Get started
              </a>
            </Link>

          </div>
        </div>
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
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
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
    </Popover>
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

const ViewRates = [
  {
    name: 'Purchase',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Refinance',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  }
]

const Learn = [
  {
    name: '4 things most important for Approval',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Should I choose 25 yr or 30 yr amortization?',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'What are lending fees, title fees, discharge fees?',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  }
]
const Calculators = [
  // {
  //   name: 'Mortgage payment calculator',
  //   description: 'Get a better understanding of where your traffic is coming from.',
  //   href: '#',
  //   icon: ChartBarIcon,
  // },
  {
    name: 'Property tax calculator',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/calculators/landTransferTax',
    icon: CursorClickIcon,
  },
  {
    name: 'How much House can I afford?',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/calculators/affordability',
    icon: CursorClickIcon,
  },
  // {
  //   name: 'Based on my max House I can afford, compare types of houses',
  //   description: 'Speak directly to your customers in a more meaningful way.',
  //   href: '#',
  //   icon: CursorClickIcon,
  // }
]

const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Us', href: '#', icon: PhoneIcon },
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
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}