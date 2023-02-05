import React from "react"
import Main from "../Components/Main"
import Row from "../Components/Row"
import Requests from "../Requests"


const Home = () => {
	return (
		<>
			<Main />
			<Row rowID="1" title="Popular"  fetchURL={Requests.requestPopular} />
			<Row rowID="2" title="Top Rated" fetchURL={Requests.requestTopRated} />
			<Row rowID="3" title="Trending" fetchURL={Requests.requestTrending} />
			<Row rowID="4" title="UpComing" fetchURL={Requests.requestUpcoming} />
		</>
	)
}


export default Home
