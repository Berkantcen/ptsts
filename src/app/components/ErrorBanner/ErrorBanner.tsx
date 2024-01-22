import { ProjectStateExplanation } from 'api/Api'
import { useParams } from 'react-router-dom'

interface errorBannerProps {
  explanation?: ProjectStateExplanation
}
const ErrorBanner = ({ explanation }: errorBannerProps) => {
  const { oId, pId } = useParams()
  let targetUrl

  switch (explanation?.state) {
    case 'no-apps':
      targetUrl = 'my-apps'
      break
    case 'not-following-apps':
      targetUrl = 'competitors'
      break
    case 'no-integration':
      targetUrl = 'settings/linked-accounts'
      break
    case 'no-apple-integration':
      targetUrl = 'settings/linked-accounts/appstore-connect'
      break
    case 'no-google-integration':
      targetUrl = 'settings/linked-accounts/google-play'
      break
    case 'not-following-android-apps':
    case 'not-following-apple-apps':
      targetUrl = 'competitors'
      break
    case 'not-have-apple-app':
    case 'not-have-android-app':
      targetUrl = 'my-apps'
      break

    default:
      targetUrl = 'reviews'
      break
  }

  return (
    <div className='col-xl-4'>
      <div className='card h-md-100' dir='ltr'>
        <div className='card-body d-flex flex-column flex-center'>
          <div className='mb-2'>
            <h1 className='fw-semibold text-gray-800 text-center lh-lg mb-6'>
              {explanation?.title}
            </h1>
            <span className='fw-semibold text-gray-800 text-center fs-6 mb-8 d-block opacity-75'>
              {explanation?.description}
            </span>
            <div
              className='flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center card-rounded-bottom h-200px mh-200px my-5 mb-lg-12'
              style={{
                backgroundImage: 'url("/media/illustrations/sigma-1/17-dark.png")',
              }}
            ></div>
          </div>
          {explanation?.actionText && (
            <div className='text-center mb-1'>
              <a className='btn btn-sm btn-primary me-2' href={`/o/${oId}/p/${pId}/${targetUrl}`}>
                {explanation.actionText}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ErrorBanner
