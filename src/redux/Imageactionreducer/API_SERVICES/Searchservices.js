import axios from "axios"
function DonorServices(){
    const Api_key="c45a857c193f6302f2b5061c3b85e743"    
   
    this.SearchReceiptByValue = async value =>
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movie_name}&page=1&include_adult=false `)//?search=${value}`);
}
export default DonorServices