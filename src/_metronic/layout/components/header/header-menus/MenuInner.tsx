import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import classNames from 'classnames'
// Context
import AppLevelContext from 'app/context/AppLevelContext'

export function MenuInner() {
  const navigate = useNavigate()

  const { oId, pId } = useParams()

  return <></>
}
