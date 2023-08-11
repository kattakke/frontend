import Quagga, {
  type QuaggaJSConfigObject,
  type QuaggaJSResultObject,
} from '@ericblade/quagga2'
import { useEffect, useRef, type FC } from 'react'
import Button from './Button'

interface Props {
  onDetected?: (code: string) => void
  onVideoOff?: () => void
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

const Scanner: FC<Props> = ({ onDetected, onVideoOff, className }) => {
  const videoRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (videoRef.current === null) return
    void Quagga.init(quaggaConfig(videoRef.current)).then(() => {
      Quagga.start()
    })
    const callback = (res: QuaggaJSResultObject): void => {
      const code = res.codeResult.code?.toString()
      if (
        code === undefined ||
        (code.slice(0, 3) !== '978' && code.slice(0, 3) !== '979') // ISBNコード判定（ISBNは接頭辞が978 or 979）
      ) {
        return
      }

      void Quagga.stop()
      if (onDetected !== undefined && onVideoOff !== undefined) {
        onDetected(code)
        onVideoOff()
      }
    }
    Quagga.onDetected(callback)
    return () => {
      Quagga.offDetected(callback)
    }
  }, [onDetected, onVideoOff])
  return (
    <div className={['p-4 bg-white rounded-3xl', className].join(' ')}>
      <div ref={videoRef} id="barcode" className="shadow-md"></div>
      <Button onClick={onVideoOff} className="mt-4 w-full">
        閉じる
      </Button>
    </div>
  )
}

export default Scanner
