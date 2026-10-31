import { useMemo } from 'react'
import DottedMap from 'dotted-map'
import { motion, useReducedMotion } from 'framer-motion'

const bengaluru = {
  lat: 12.9716,
  lng: 77.5946,
}

export default function LocationMap() {
  const shouldReduceMotion = useReducedMotion()
  const { mapSource, markerPosition } = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: 'diagonal' })
    const marker = map.getPin(bengaluru)
    const svg = map.getSVG({
      radius: 0.2,
      color: '#82968e',
      shape: 'circle',
      backgroundColor: 'transparent',
    })

    return {
      mapSource: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`,
      markerPosition: marker
        ? {
            left: `${(marker.x / map.image.width) * 100}%`,
            top: `${(marker.y / map.image.height) * 100}%`,
          }
        : { left: '72%', top: '58%' },
    }
  }, [])

  return (
    <div className="relative aspect-[2/1] min-h-56 overflow-hidden bg-dark-50 dark:bg-dark-950">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_72%_43%,rgb(var(--color-primary-400)/0.18),transparent_25%)]"
      />
      <img
        src={mapSource}
        alt="Dotted world map highlighting Bengaluru, India"
        className="absolute inset-0 h-full w-full select-none object-cover opacity-45 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] dark:opacity-55"
        draggable={false}
      />

      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={markerPosition}
      >
        {!shouldReduceMotion && (
          <motion.span
            aria-hidden="true"
            className="absolute -inset-3 rounded-full border border-primary-300/70"
            animate={{ opacity: [0.7, 0], scale: [0.55, 1.45] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
        <span className="relative block h-3 w-3 rounded-full border-2 border-white bg-primary-400 shadow-[0_0_18px_rgb(var(--color-primary-300)/0.9)] dark:border-dark-950" />
        <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-primary-400/25 bg-white/90 px-3 py-1.5 text-xs font-semibold text-dark-800 shadow-lg backdrop-blur dark:bg-dark-900/90 dark:text-dark-100">
          Bengaluru
        </span>
      </div>
    </div>
  )
}
