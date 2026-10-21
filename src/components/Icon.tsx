function Icon({ name }: { name: 'shield' | 'bolt' | 'globe' | 'lock' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      {name === 'shield' && (
        <path d="M12 3l7 2.8v5.9c0 4.4-2.9 7.1-7 9.3-4.1-2.2-7-4.9-7-9.3V5.8L12 3z" />
      )}
      {name === 'bolt' && <path d="M13 2L4 14h7l-1 8 10-13h-7l1-7z" />}
      {name === 'globe' && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.6 2.5 4 5.5 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.5-4-9s1.4-6.5 4-9z" />
        </>
      )}
      {name === 'lock' && (
        <>
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </>
      )}
    </svg>
  )
}

export default Icon
