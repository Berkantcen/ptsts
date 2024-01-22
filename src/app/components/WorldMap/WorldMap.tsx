import { ReviewCountryReportRecord } from 'api/Api'
import { useNavigate, useLocation } from 'react-router-dom'
import { WorldMap, CountryContext } from 'react-svg-worldmap'
import { colorChanger } from 'app/utilities/colorChanger'
import { useThemeMode } from '_metronic/partials'

interface IProps {
  datas: ReviewCountryReportRecord[] | undefined
}
interface DaTaMapProps {
  [key: string]: { country: string; value: number; color: string }
}

function WorldMapWidget({ datas }: IProps) {
  const { mode } = useThemeMode()

  const myDataMap: DaTaMapProps = {}
  const myData: any = datas?.map((item: any) => {
    if (!item) {
      return {}
    }
    //@ts-ignore
    myDataMap[item.country.id] =
      {
        country: item.country.id,
        value: `: ${item?.ratingAverage?.toFixed(2)}`,
        color: item.theme,
      } || {}
    return {
      country: item.country.id,
      value: `: ${item?.ratingAverage?.toFixed(2)}`,
      color: item.theme,
    }
  })

  const navigate = useNavigate()
  const location = useLocation()

  const customStyleFunction = (otherData: CountryContext): React.CSSProperties => {
    const myItem = myDataMap?.[otherData.countryCode.toLowerCase()] || {}

    return {
      fill: myItem.color ? colorChanger(myItem.color) : 'white',
      stroke: 'black',
      strokeWidth: 1,
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <WorldMap
        backgroundColor={mode === 'dark' ? '#1c1c1c' : '#ffffff'}
        value-suffix='review'
        size='responsive'
        data={myData || []}
        styleFunction={customStyleFunction}
        onClickFunction={(item: any) => {
          const path = window.location.pathname.split('/')
          path.pop()
          let navigationPath
          if (location.search) {
            navigationPath = `${path.join('/')}/reviews${
              location.search
            }&countryCodes=${item.countryCode.toLowerCase()}`
          } else {
            navigationPath = `${path.join(
              '/',
            )}/reviews?countryCodes=${item.countryCode.toLowerCase()}`
          }
          navigate(navigationPath)
        }}
      />
    </div>
  )
}
export default WorldMapWidget
