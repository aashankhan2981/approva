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
import UserProfile from "../headers/UserProfile";
import { SidebarDashboard } from ".";
import { CkeckedIcon, DashShieldIcon, DoneIcon, EditIcon, IndividualIcon, InfoIcon, LampIcon, LocationPin2Icon, LocationPinIcon, ManyCoApplicantIcon, MortgageVisualIcon, ShildIcon, SignalIcon, TileIcon, UserAvatarIcon, UserIcon } from "../../icons";
import { Grid } from "@mui/material";



export function DashboardSide() {
  const user = useContext(AuthenticationContext)

  const aboutUsScrollFunc = () => {
    window.scrollTo(200,2800)
  }

  return (
    <>
    <Popover className="relative bg-white w-1/1 ">
        <div className="mx-auto  rounded-xl bg-[#1d72e8]/[.05] h-[195rem]">
            <div className="flex flex-wrap items-center py-12 ">
              <div className="flex w-1/4">
                  <Link href="/">
                  <a >
                      <img
                      className="h-[10rem] flex w-[10rem] sm:h-10"
                      src='/imgs/landing/logo.svg'
                      alt=""
                      />
                  </a>
                  </Link>
              </div>
              <Grid container justifyContent="center">
                  <Grid item xs={5} alignItems={'right'}>
                      <UserAvatarIcon className='text-[#398ECE]'/>
                  </Grid>
                  <Grid item xs={5} alignSelf={'center'}>
                      <p className="text-2xl mb-2 font-poppins">Jonah Hart</p>
                      <p className="flex text-sm mt-2 items-center"><span><PhoneIcon className='mr-1 flex w-5 text-[#398ECE]'/></span> 647-564-5323</p>
                      <p className="flex text-sm mt-2 items-center"><span><PhoneIcon className='mr-1 flex w-5 text-[#398ECE]'/></span> jonah.hart@gmail.com</p>
                      <p className="flex text-sm mt-2 items-center"><span><LocationPinIcon className='mr-1 flex w-5 text-[#398ECE]'/></span> 456 Quebec Street, Toronto ON, L6A 2K3</p>                       
                  </Grid>
              </Grid>
            </div>
            <div className="flex items-center py-12 text-center ">
                <Grid container justifyContent="center">
                    <Grid item xs={1.5} alignItems={'right'}>
                        <TileIcon className='w-12 h-12 text-[#398ECE]'/>
                    </Grid>
                    <Grid item xs={10} alignSelf={'center'}>
                        <p className="text-md font-semibold">Lender Comparison</p>
                        <p className="text-sm">Compare which Lender gets you the Best Deal</p>
                    </Grid>
                </Grid>
            </div>
            <div className="flex items-center py-12 text-center ">
                <Grid container justifyContent="center">
                    <Grid item xs={1.5} alignItems={'center'}>
                        <DashShieldIcon className='w-12 h-12 text-[#398ECE]'/>
                    </Grid>
                    <Grid item xs={10} alignSelf={'center'}>
                        <p className="text-md font-semibold">Net Worth Statement</p>
                        <p className="text-sm">List your Assets and Liabilities in your name</p>
                    </Grid>
                </Grid>
            </div>
            <div className="flex items-center py-12 text-center ">
                <Grid container justifyContent="center">
                    <Grid item xs={1.5} alignItems={'center'}>
                        <LampIcon className='w-12 h-12 text-[#398ECE]'/>
                    </Grid>
                    <Grid item xs={10} alignSelf={'center'}>
                        <p className="text-md font-semibold">Document Upload</p>
                        <p className="text-sm">Submit doc's to our Team for Review before Bank submission</p>
                    </Grid>
                </Grid>
            </div>
            <div className="flex items-center py-12 text-center ">
                <Grid container justifyContent="center">
                    <Grid item xs={1.5} alignItems={'center'}>
                        <LocationPin2Icon className='w-12 h-12 text-[#398ECE]'/>
                    </Grid>
                    <Grid item xs={10} alignSelf={'center'}>
                        <p className="text-md font-semibold">My Credit Profile</p>
                        <p className="text-sm">Review your Credit Score, Debt ratios, and more</p>
                    </Grid>
                </Grid>
            </div>
            <div className="flex items-center py-12 text-center ">
                <Grid container justifyContent="center">
                    <Grid item xs={1.5} alignItems={'center'}>
                        <MortgageVisualIcon className='w-12 h-12 text-[#398ECE]'/>
                    </Grid>
                    <Grid item xs={10} alignSelf={'center'}>
                        <p className="text-md font-semibold">My Mortgage Visualised</p>
                        <p className="text-sm">Take an in-depth look at interest/insurance costs</p>
                    </Grid>
                </Grid>
            </div>
            <div className="flex items-center py-12 text-center ">
                <Grid container justifyContent="center">
                    <Grid item xs={1.5} alignItems={'center'}>
                        <SignalIcon className='w-12 h-12 text-[#398ECE]'/>
                    </Grid>
                    <Grid item xs={10} alignSelf={'center'}>
                        <p className="text-md font-semibold">My Expected Closing Costs</p>
                        <p className="text-sm">See estimated Land Transfer Tax, Legal, other fees required to move into your new home</p>
                    </Grid>
                </Grid>
            </div>
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