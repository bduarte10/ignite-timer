import { Outlet } from 'react-router-dom'
import { Copyright } from '../../components/Copyright'
import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <>
      <LayoutContainer>
        <Header />
        <Outlet />
        <Copyright />
      </LayoutContainer>
    </>
  )
}
