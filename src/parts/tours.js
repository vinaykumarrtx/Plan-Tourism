import Card from './Card';


function Tours({currentdata,removehandler}){

    return(
        <div className='container'>


        <div className='kumars'>Plan With Kumars</div>
        <div className='cardcontainer'>
            {
                currentdata.map((data)=>{
                   return( <Card {...data} key={data.id} removehandler={removehandler}></Card>)
                }


                )
            }

        </div>
        

        </div>


    )

}
export default Tours;