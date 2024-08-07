'use client'

import {
  Link,
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem
} from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import React from 'react'
import { NavigationProps } from 'src/components/Navigation'

export default function NavbarComponent({ router }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const t = useTranslations('Navbar')

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="shadow-sm bg-white h-11 border-b-4 border-[#f3d2a7]"
    >
      {/* <NavbarContent className="!flex-grow-0 max-w-0">
        <NavbarItem className="z-10 size-10">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />
        </NavbarItem>
      </NavbarContent> */}

      <NavbarContent className="hidden p-4 sm:flex gap-10 m-auto" justify="center">
        {router.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-[#5e5e5e] text-medium"
              href={item.router}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.name)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {router.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-[#5e5e5e] text-medium"
              href={item.router}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.name)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
