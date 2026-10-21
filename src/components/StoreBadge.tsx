import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

function StoreBadge({
  badge,
  badgeAlt,
  comingSoon,
  href,
}: {
  badge: string
  badgeAlt: string
  comingSoon?: boolean
  href?: string
}) {
  if (comingSoon) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className="store-badge store-badge-soon"
            aria-label={`${badgeAlt}. Coming soon`}
            role="img"
            tabIndex={0}
          >
            <img src={badge} alt="" />
          </span>
        </TooltipTrigger>
        <TooltipContent sideOffset={6}>Coming soon</TooltipContent>
      </Tooltip>
    )
  }

  return (
    <a
      className="store-badge"
      href={href}
      target="_blank"
      aria-label={badgeAlt}
    >
      <img src={badge} alt="" />
    </a>
  )
}

export default StoreBadge
