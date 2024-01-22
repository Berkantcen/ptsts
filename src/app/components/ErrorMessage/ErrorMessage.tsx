import React from 'react'

interface ErrorMessageProps {
  text: string
}

const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return <div className='fv-plugins-message-container text-danger'>{text}</div>
}

export default ErrorMessage
