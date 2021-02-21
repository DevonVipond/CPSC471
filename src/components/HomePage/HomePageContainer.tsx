import { useState, useEffect } from 'react'
import HomePage from './HomePage'
import PageWrapper from "../Shared/PageWrapper/PageWrapper";
//import LoadingSpinner from "../../Shared/LoadingSpinner/Index";
//import BoardService from '../../services/BoardService/Index'
//import LoadingSpinner from "../LoadingSpinner/Index";

const HomePageContainer: React.FC  = () => {
    const [ state, setState ] = useState({
        loading: true,
        boards: null,
    })

    //useEffect(() => {
    //    BoardService.fetchBoard()
    //        .then(res => {
    //            setState({loading: false, boards: res})
    //        })
    //        .catch(e => {
    //            console.log(e)
    //            setState({loading: false, boards: null})
    //        })
    //}, [])

    //if (state.loading) { return <LoadingSpinner/> }
    //else if (!state.boards) { return <h3>Failed to retrieve boards</h3>}

    return <HomePage />
}

export default PageWrapper(HomePageContainer)

