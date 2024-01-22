import { useContext, useEffect, useState } from 'react'
import { toAbsoluteUrl } from '_metronic/helpers'
import { ToastContainer } from 'react-toastify'
// Context
import AppLevelContext from 'app/context/AppLevelContext'

// Redux
import ReactLoading from 'react-loading'
const Login = () => {
  const { login, setCurrentPage } = useContext(AppLevelContext)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    setCurrentPage('PTSTS Login')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ToastContainer autoClose={3000} hideProgressBar={true} newestOnTop={true} />
      <div className='d-flex flex-column flex-root' id='kt_app_root'>
        <div className='d-flex flex-column flex-lg-row flex-column-fluid' id='loginPage'>
          <div className='d-flex flex-lg-row-fluid'>
            <div className='d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100'>
              <img
                className='theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20'
                src={toAbsoluteUrl('/media/custom/snatchLogo.svg')}
                alt=''
              />
              <img
                className='theme-dark-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20'
                src={toAbsoluteUrl('/media/custom/LogoSquare.png')}
                alt=''
              />

              <h1 className='text-gray-800 fs-2qx fw-bold text-center mb-7'>
                Personal Trainer Student Tracking System
              </h1>

              <div className='text-gray-600 fs-base text-center fw-semibold'>
                App development is still on going. Please contact berkantcen@gmail.com for your
                credentials.
              </div>
            </div>
          </div>

          <div className='d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20'>
            {/*begin::Card*/}
            <div
              className='bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20'
              style={{
                width: '100%',
              }}
            >
              {/*begin::Wrapper*/}
              <div className='d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20'>
                {/*begin::Form*/}
                <div
                  className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
                  id='kt_sign_in_form'
                >
                  {/*begin::Heading*/}
                  <div className='text-center mb-11'>
                    <h1 className='text-gray-900 fw-bolder mb-3'>Sign In</h1>
                  </div>

                  {/*end::Separator*/}
                  {/*begin::Input group-*/}
                  <div className='fv-row mb-8 fv-plugins-icon-container'>
                    {/*begin::Email*/}
                    <input
                      type='text'
                      placeholder='Email'
                      name='email'
                      autoComplete='off'
                      className='form-control bg-transparent'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {/*end::Email*/}
                    <div className='fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback' />
                    <div
                      data-lastpass-icon-root='true'
                      style={{
                        position: 'relative',
                        height: '0px !important',
                        width: '0px !important',
                        float: 'left',
                      }}
                    />
                  </div>
                  {/*end::Input group-*/}
                  <div className='fv-row mb-3 fv-plugins-icon-container'>
                    {/*begin::Password*/}
                    <input
                      type='password'
                      placeholder='Password'
                      name='password'
                      autoComplete='off'
                      className='form-control bg-transparent'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {/*end::Password*/}
                    <div className='fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback' />
                    <div
                      data-lastpass-icon-root='true'
                      style={{
                        position: 'relative',
                        height: '0px !important',
                        width: '0px !important',
                        float: 'left',
                      }}
                    />
                  </div>
                  {/*end::Input group-*/}
                  {/*begin::Wrapper*/}
                  <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
                    <div />
                    {/*begin::Link*/}
                    {/*end::Link*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Submit button*/}
                  <div className='d-grid mb-10'>
                    <button
                      className='btn btn-primary'
                      onClick={() => {
                        login(email, password, setLoading)
                      }}
                    >
                      {loading ? (
                        <div className='d-flex justify-content-center align-items-center'>
                          <ReactLoading type='spin' color='#ffffff' height={20} width={20} />
                        </div>
                      ) : (
                        'Sign In'
                      )}
                    </button>
                  </div>
                  {/*end::Submit button*/}
                </div>
                {/*end::Form*/}
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Card*/}
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
