import axios from "axios"
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
// require('dotenv').config()

const options = {
  params: {
         maxResults: "50"
      },
  headers: {
    'X-RapidAPI-Key': '51f333c930msh5494e60c5e55ac9p1456bbjsnac2eb0e26da0',
    //process.env.REACT_APP_RAPID_API_KEY,
    //'51f333c930msh5494e60c5e55ac9p1456bbjsnac2eb0e26da0',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`,options);
 // const {data}= await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyD261Twd19U36EDafJ5j8N1A5Nj47634Os&part=snippet&q=${val}&maxResults=50`)
  //console.log("this is data from get req")
  console.log(data)
  return (data);
};
