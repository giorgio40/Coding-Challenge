import React, { useEffect } from 'react'
import { connect } from "react-redux"

 function SearchResults(props) {


 const { search } = props;

  console.log(props)

return (
            
  <div>   
        { useEffect(() => {
        
      [search].map((item, id ) =>{
        
    <div key={id}>
    
      <p> {item.title}</p>
      <p>{item.author}</p>
      <p>{item.comment_text}</p>
      <p>{item.story_title}</p>
      <p>{item.story_url}</p>
      
    </div>
      })

        },[search] )}
  </div>   
)
}


const mapStateToProps = (state) =>{
return{
search: state.text.search

}



}




export default connect(mapStateToProps,{})(SearchResults)
