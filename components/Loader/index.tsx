import { BeatLoader } from 'react-spinners'

interface CSSProperties {
  display: string
  margin: string
}

interface Prop {
  color?: string
}

const override: CSSProperties = {
  display: 'flex',
  margin: '0 auto',
}

export default function Loader({ color }: Prop) {
  return (
    <div className="">
      <BeatLoader
        className="h-2 w-28 flex justify-center items-center"
        cssOverride={override}
        color={color}
        size={10}
      />
    </div>
  )
}
