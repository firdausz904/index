export function SpaceBackground() {
  return (
    <div className="space-background" aria-hidden="true">
      {Array.from({ length: 90 }, (_, index) => (
        <span
          className="star"
          key={index}
          style={{
            left: `${(index * 47) % 100}%`,
            top: `${(index * 83) % 100}%`,
            opacity: 0.25 + ((index * 17) % 70) / 100,
            animationDelay: `${(index % 11) * 0.3}s`,
          }}
        />
      ))}
    </div>
  )
}
