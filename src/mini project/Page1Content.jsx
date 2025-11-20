import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1Content = () => {
  return (
    <div className='py-10 flex justify-between items-center gap-10 h-[90vh]'>
      <Leftcontent />
      <Rightcontent />
    </div>
  )
}

export default Page1Content
