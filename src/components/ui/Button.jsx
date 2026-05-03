import React from 'react'

const Button = ({ as = 'button', href, variant = 'primary', className = '', children, ...props }) => {
  const base = 'btn'
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  }

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`.trim()

  if ((as === 'a' && href) || href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
