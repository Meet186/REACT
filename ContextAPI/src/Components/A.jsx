import C from './C'
import D from './D'
const A = () => {
  return (
    <div className="bg-green-500 p-10" >
      A
      <div className='flex gap-2'>
        <C/>
        <D/>
      </div>

    </div>
  )
}

export default A
