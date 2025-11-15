import { BookmarkCheck} from 'lucide-react';

const amazon = (some) => {
  return (
    <div>
      <div className='card'>
        <div className="top">
          <img src={some.img} alt=''/>
          <button> Save <BookmarkCheck /></button>
        </div>
      <div className='center'>
        <h3>{some.company} <span>{some.date}</span></h3>
        <h2>{some.post}</h2>
        <div>
          <h4>{some.tag1}</h4>
          <h4>{some.level}</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h3>{some.pay}</h3>
            <p>{some.location}</p> 
        </div>
        <button>Apply Now</button>
      </div>
    </div>
    </div>
  )
}

export default amazon
