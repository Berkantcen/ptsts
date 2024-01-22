import { Text } from '@visx/text'
import { scaleLog } from '@visx/scale'
import Wordcloud from '@visx/wordcloud/lib/Wordcloud'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import { useNavigate, useLocation } from 'react-router-dom'
import { useRef, useState } from 'react'
import PageLoading from '../PageLoading/PageLoading'
import { colorChanger } from 'app/utilities/colorChanger'

interface ExampleProps {
  words: WordData[]
}

export interface WordData {
  text: string
  value: number
  color: string
}

const WordCloud = ({ words }: ExampleProps) => {
  const [title, setTitle] = useState(' ')
  const location = useLocation()
  const navigate = useNavigate()
  const wordsRef = useRef<HTMLDivElement | null>(null)
  const fontScale = scaleLog({
    domain: [Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))],
    range: [17, 38],
  })
  const fontSizeSetter = (datum: WordData) => fontScale(datum.value)
  const fixedValueGenerator = () => 0.5

  return (
    <ParentSize className='px-9'>
      {({ width }) => (
        <div
          ref={wordsRef}
          className='wordcloud py-6'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title={title}
        >
          {!wordsRef.current && (
            <div
              className='d-flex justify-content-center align-items-center'
              style={{
                height: '250px',
              }}
            >
              <PageLoading />
            </div>
          )}

          <Wordcloud
            words={words}
            height={250}
            width={width}
            fontSize={fontSizeSetter}
            font="'Inter', 'Helvetica', sans-serif"
            padding={3}
            spiral='archimedean'
            rotate={0}
            random={fixedValueGenerator}
          >
            {(cloudWords) =>
              cloudWords.map((w) => {
                return (
                  <Text
                    className={`cursor-pointer fw-bold`}
                    key={w.text}
                    fill={
                      //@ts-ignore
                      colorChanger(w.color)
                    }
                    textAnchor={'middle'}
                    transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                    fontSize={w.size}
                    fontFamily={w.font}
                    onMouseLeave={() => setTitle('')}
                    onMouseOver={() => w.text && setTitle(w.text)}
                    onClick={() => {
                      const path = window.location.pathname.split('/')
                      path.pop()
                      let navigationPath
                      if (location.search) {
                        navigationPath = `${path.join('/')}/reviews${location.search}&keywords=${
                          w.text
                        }`
                      } else {
                        navigationPath = `${path.join('/')}/reviews?keywords=${w.text}`
                      }
                      navigate(navigationPath)
                    }}
                  >
                    {w.text}
                  </Text>
                )
              })
            }
          </Wordcloud>
        </div>
      )}
    </ParentSize>
  )
}
export default WordCloud
