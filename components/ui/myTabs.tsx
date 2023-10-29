"use client"
import React from 'react'
import { Tab } from "@headlessui/react"
import classNames from "classnames"
import Link from "next/link"

const MyTabs = () => {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab className={({selected}) => classNames("bg-blue-600",selected?"underline":"no-underline")}><Link href="/services/education"> education</Link></Tab>
        <Tab className={({selected}) => classNames("bg-blue-600",selected?"underline":"no-underline")}><Link href="/services/retirement"> retirement</Link></Tab>
        <Tab className={({selected}) => classNames("bg-blue-600",selected?"underline":"no-underline")}><Link href="/services/investment"> investment</Link></Tab>
      </Tab.List>
  {/*    <Tab.Panels>
        <Tab.Panel></Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>*/}
    </Tab.Group>
  )
}

export default MyTabs