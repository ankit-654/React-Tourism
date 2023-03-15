import ExploreComponent from "./ExploreComponent"
import ExploreData from "./ExploreData";
export const ExploreCard =(props) =>{
    return(
        <>
            
                <div>
                    <ExploreComponent details={ExploreData}/>
                </div>
           
        </>
    )
}