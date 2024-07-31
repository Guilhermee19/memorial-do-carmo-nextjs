'use client'

import { ReactNode } from 'react'

import NavbarComponent from './navbar'
import Sidebar from './sidebar'
import { HeaderNavbarComponent } from '../HeaderNavbar'

export interface IRoutes {
  name: string
  router: string
  icon?: string
}
interface SidebarProps {
  children: ReactNode
  type: 'Navbar' | 'Sidebar'
  routes: IRoutes[]
}

export interface NavigationProps {
  router: IRoutes[]
}

export const Navigation = ({ children, type, routes }: SidebarProps) => {
  return (
    <div className="flex h-dvh w-full">
      {type === 'Sidebar' && <Sidebar router={routes} />}
      <div className="w-full flex-1 flex-col">
        <HeaderNavbarComponent />
        {type === 'Navbar' && <NavbarComponent router={routes} />}
        <main className="mt-4 h-full w-full overflow-visible">
          <div className="flex h-[90%] w-full flex-col gap-4 ">{children}</div>
        </main>
      </div>
    </div>
  )
}
