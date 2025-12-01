import { Route, Routes } from "react-router-dom"
import { MyTemplate } from "./components/templates/myTemplate"
import { HomePage } from "./components/pages/homePage"
import { LetterPage } from "./components/pages/letterPage"
import { AbouUsPage } from "./components/pages/aboutUsPage"
import { BookingPage } from "./components/pages/bookingPage"
import { ContactPage } from "./components/pages/contactPage"
import { Navbar } from "./components/organisms/navbar"
import { useState } from "react"
import { ModalLogin } from "./components/organisms/modalLogin"
import { CartShop } from "./components/organisms/modalCartShop"

// Tendencies sections
import { TendenciesCoffee } from "./components/organisms/tendenciesCoffee"
import { TendenciesCokies } from "./components/organisms/tendenciesCokies"
import { TendenciesCakes } from "./components/organisms/tendenciesCakes"

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [cartShopOpen, setCartShopOpen] = useState(false)

  const pages = [
    {
      path: '/',
      element: <HomePage/>,
      children: [
        { index: true, element: <TendenciesCoffee /> }, 
        { path: 'coffee', element: <TendenciesCoffee /> },
        { path: 'cookies', element: <TendenciesCokies /> },
        { path: 'cakes', element: <TendenciesCakes /> },
      ]
    },
    {
      path: '/letter',
      element: <LetterPage/>
    },
    {
      path: '/aboutus',
      element: <AbouUsPage/>
    },
    {
      path: '/bookings',
      element: <BookingPage/>
    },
    {
      path: '/contact',
      element: <ContactPage/>
    },
  ]

  return (
    <>
      <Navbar setModalIsOpen={setModalIsOpen} setCartShopOpen={setCartShopOpen} />

      <MyTemplate>
        {modalIsOpen ? <ModalLogin setModalIsOpen={setModalIsOpen} /> : ''}
        {cartShopOpen ? <CartShop setCartShopOpen={setCartShopOpen} /> : ''}

        <Routes>
          {pages.map((page, i) => (
            <Route
              key={i}
              path={page.path}
              element={page.element}
            >
              {page.children?.map((child, j) => (
                <Route
                  key={j}
                  path={child.path}
                  index={child.index} // Importante: pasar el index
                  element={child.element}
                />
              ))}
            </Route>
          ))}
        </Routes>
      </MyTemplate>
    </>
  )
}

export default App