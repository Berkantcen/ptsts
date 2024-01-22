//@ts-ignore
//bu paketin type dosyası içeren paketi bulunmadığı için ts-ignore ile kullanıyoruz.
import HSBar from 'react-horizontal-stacked-bar-chart'
import { colorChanger } from 'app/utilities/colorChanger'

export default function StackedBar({ datam }: any) {
  const data = datam
    .map((item: any, index: number) =>
      item.value !== 0
        ? {
            value: item.value * 100,
            description: `${index + 1} Stars`,
            color: colorChanger(item.theme),
          }
        : null,
    )
    .filter(Boolean)

  return (
    <div style={{ width: '100px' }}>
      <HSBar
        height={10}
        outlineWidth={2}
        outlineColor='white'
        id='chart'
        fontColor='rgb(50,20,100)'
        data={data}
      />
    </div>
  )
}
