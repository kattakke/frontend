import { type FC } from 'react'
import Quagga, {
  type QuaggaJSConfigObject,
  type QuaggaJSResultObject,
} from '@ericblade/quagga2'
import { useEffect, useRef } from 'react'
import Button from './Button'

interface Props {
  onDetected?: () => void
  className?: string
}

const quaggaConfig = (videoElm: Element): QuaggaJSConfigObject => ({
  inputStream: {
    name: 'Live',
    type: 'LiveStream',
    target: videoElm,
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
})

const Scanner: FC<Props> = ({ onDetected, className }) => {
  // TODO: to be video
  const videoRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (videoRef.current === null) return
    void Quagga.init(quaggaConfig(videoRef.current)).then(() => {
      Quagga.start()
    })
    const callback = (res: QuaggaJSResultObject): void => {
      console.log('completed')
      console.log(res)

      // 正しい ISBN かどうか確認

      void Quagga.stop()
      if (onDetected !== undefined) onDetected()
    }
    Quagga.onDetected(callback)
    return () => {
      Quagga.offDetected(callback)
    }
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
