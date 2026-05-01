const Card = ({ className = '', children }) => {
  return (
    <div className={`glass glow-hover rounded-3xl p-6 sm:p-7 ${className}`.trim()}>
      {children}
    </div>
  )
}

export default Card
