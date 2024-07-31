'use client'

import { useCallback, useState } from 'react'

import { Button, ScrollShadow, Spacer, Tooltip, cn } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'usehooks-ts'
import { NavigationProps } from '..'
import { SidebarContent } from './sidebar-content'

export default function Sidebar({ router }: NavigationProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const t = useTranslations('Navbar')

  const isCompact = isCollapsed || isMobile

  const onToggle = useCallback(() => {
    setIsCollapsed((prev) => !prev)
  }, [])

  const sectionItemsWithTeams = [
    {
      key: 'your-teams',
      title: 'Sua equipe',
      items: [
        {
          key: 'felipe',
          href: '#',
          title: 'Felipe Salomão',
          startContent: 'AVATAR',
        },
        {
          key: 'landi',
          href: '#',
          title: 'Kauã Landi',
          startContent: 'AVATAR',
        },
        {
          key: 'xavier',
          href: '#',
          title: 'Kauan Xavier',
          startContent: 'AVATAR',
        },
      ],
    },
  ]

  return (
    <div
      className={cn(
        'relative flex h-full w-72 flex-col !border-r-small border-divider p-6 transition-width',
        {
          'w-16 items-center px-2 py-6': isCompact,
        }
      )}
    >
      <div
        className={cn(
          'flex items-center gap-3 px-3 justify-between',

          {
            'justify-between gap-0': isCompact,
          }
        )}
      >
        <div className="flex h-8 w-8">LOGO</div>

        <Button
          aria-label="Toggle Sidebar"
          className={cn('z-50 transform: translate-x-14', {
            'translate-x-5': isCompact,
          })}
          isIconOnly
          size="sm"
          variant="light"
          onPress={onToggle}
        >
          LOGO
        </Button>
      </div>
      <Spacer y={8} />
      {/* <div className="flex items-center gap-3 px-3">
        <Avatar
          isBordered
          className="flex-none"
          size="sm"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
        <div className={cn('flex max-w-full flex-col', { hidden: isCompact })}>
          <p className="truncate text-small font-medium text-default-600">
            João
          </p>
          <p className="truncate text-tiny text-default-400">Administrador</p>
        </div>
      </div> */}
      <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
        <SidebarContent
          defaultSelectedKey="home"
          isCompact={isCompact}
          items={sectionItemsWithTeams}
        />
      </ScrollShadow>
      <Spacer y={2} />
      <div
        className={cn('mt-auto flex flex-col', {
          'items-center': isCompact,
        })}
      >
        <Tooltip
          content="Help & Feedback"
          isDisabled={!isCompact}
          placement="right"
        >
          <Button
            aria-label="Help & Information"
            fullWidth
            className={cn(
              'justify-start truncate text-default-500 data-[hover=true]:text-foreground',
              {
                'justify-center': isCompact,
              }
            )}
            isIconOnly={isCompact}
            startContent={isCompact ? null : 'LOGO'}
            variant="light"
          >
            {isCompact ? 'LOGO' : 'Help & Information'}
          </Button>
        </Tooltip>
        <Tooltip content="Log Out" isDisabled={!isCompact} placement="right">
          <Button
            aria-label="Log Out"
            className={cn(
              'justify-start text-default-500 data-[hover=true]:text-foreground',
              {
                'justify-center': isCompact,
              }
            )}
            isIconOnly={isCompact}
            startContent={isCompact ? null : 'LOGO'}
            variant="light"
          >
            {isCompact ? 'LOGO' : 'Log Out'}
          </Button>
        </Tooltip>
      </div>
    </div>
  )
}
