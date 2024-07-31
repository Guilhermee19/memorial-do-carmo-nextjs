import { ReactNode } from 'react'
import { IRoutes, Navigation } from '../../../components/Navigation'

interface LayoutProps {
  children: ReactNode
}
export default function AuthLayout({ children }: LayoutProps) {
  const router: IRoutes[] = [
    {
      name: 'home',
      router: '/memorial-do-carmo',
      icon: '',
    },
    {
      name: 'the_memorial',
      router: '/cemiterio-memorial-do-carmo',
      icon: '',
    },
    {
      name: 'solutions',
      router: '/solucoes',
      icon: '',
    },
    {
      name: 'services',
      router: '/servicos',
      icon: '',
    },
    {
      name: 'blog',
      router: '/blog',
      icon: '',
    },
    {
      name: 'contact',
      router: '/contato',
      icon: '',
    },
    {
      name: 'assignee_area',
      router: '/area-do-cessionario',
      icon: '',
    },
  ]

  return (
    <Navigation routes={router} type="Navbar">
      {children}
    </Navigation>
  )
}
