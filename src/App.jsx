import Amazon from './components/amazon';
import jobs from './components/data';

const App = (some) => {

  


  return (
    <div className='parent'>
      {jobs.map(function(some,idx){
        return<div key={idx}> <Amazon  
        company={some.companyName} 
        post={some.post} 
        location={some.location} 
        pay={some.pay} 
        date={some.datePosted} 
        tag1={some.tag1} 
        level={some.tag2} 
        img={some.brandLogo}/>
        </div>
      })}
    </div>
  )
}

export default App;