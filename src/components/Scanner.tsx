import Quagga from '@ericblade/quagga2'
import React, { FC, useEffect, useRef } from 'react'
import Button from './Button'

type Props = {
  onDetected?: () => undefined
  className?: string
}

const Scanner: FC<Props> = ({ onDetected, className }) => {
  const videoRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: videoRef.current,
          constraints: {
            facingMode: 'environment',
          },
        },
        locator: {
          patchSize: 'medium',
          halfSample: true,
        },
        numOfWorkers: 2,
        decoder: {
          readers: ['ean_reader'],
        },
        locate: true,
      },
      function (err) {
        if (err) {
          console.log(err)
          return
        }
        console.log('Initialization finished. Ready to start')
        Quagga.start()
      }
    )
    Quagga.onDetected((res) => {
      console.log('completed')
      console.log(res)

      // 正しい ISBN かどうか確認

      Quagga.stop()
      onDetected()
    })
  }, [])
  return (
    <div
      className={[
        'p-4 bg-white w-full overflow-hidden rounded-md shadow-md',
        className,
      ].join(' ')}
    >
      <Button onClick={onDetected}>閉じる</Button>
      <div ref={videoRef}></div>
    </div>
  )
}

export default Scanner
