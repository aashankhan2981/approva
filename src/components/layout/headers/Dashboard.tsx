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
import { SidebarDashboard } from "../sidebar";



export function Dashboard() {
  const user = useContext(AuthenticationContext)

  const aboutUsScrollFunc = () => {
    window.scrollTo(200,2800)
  }

  return (
    <>
    <Popover className="relative bg-white w-1/1 ">
        <div className="mx-auto m-10 ml-12 rounded-xl bg-[#1d72e8]/[.05] px-4 sm:px-6">
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
            </div>
            <SidebarDashboard/>
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