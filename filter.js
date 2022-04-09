import .\Components\ListOfServices
  <div className= "btns">
  <button> Plumbering</button>
  <button> Kids </button>
  <button> Gardening </button>
  <button> Animals </button>
  <button> IT </button>
  <button> House moving </button>
  </div>


  <div className='products-center'>
  {props.Service.map{Service => {
      return <ListOfServices key= {Service.id}
  }} }
  
  </div>