import { ReactNode } from 'react'
import { IRoutes, Navigation } from '../../../components/Navigation'

interface LayoutProps {
  children: ReactNode
}
export default function AuthLayout({ children }: LayoutProps) {
  const router: IRoutes[] = [
    {
      name: 'home',
      router: '/initial',
      icon: '',
    },
    {
      name: 'about',
      router: '/about',
      icon: '',
    },
    {
      name: 'contact',
      router: '/contact',
      icon: '',
    },
  ]

  return (
    <Navigation routes={router} type="Navbar">
      {children}
    </Navigation>
  )
}
