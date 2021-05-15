import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CurrentTournamentsPage() {
    const [isLoading, setIsLoading] = useState(true)

    const [currentTournament, setCurrentTournament] = useState([]);
    const [currentMatches, setCurrentMatches] = useState([]);
    const [tour, setTour] = useState(1)

    // useEffect(() => {
    //     axios.post('https://tennis-world-app.herokuapp.com/current-tournament', {
    //         season: '2021'
    //     })
    //         .then(res => {
    //             setIsLoading(false)
    //             setCurrentMatches(res.data.results[tour].matches);
    //             setCurrentTournament(res.data.results[tour].tournament);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }, [tour])


    return (
        <div className="current-tournaments-page-container container-fluid p-0">
            <div className="d-flex bg-dark current-tournaments-title">
                <h2 className="text-white text-center w-100">Current Tournaments</h2>
                <select
                    className="ml-auto"
                    onChange={e => setTour(e.target.value)}
                >
                    <option value="1">ATP</option>
                    <option value="0">WTA</option>
                </select>
            </div>
            <div>
                {isLoading ? 
                <div className="d-flex justify-content-center mt-4 mx-auto">
                    <h4 className="text-center text-white mt-4">Loading matches...</h4>
                </div>
            :
                    <>
                        <h3 className="mt-4 ml-4 text-white">{currentTournament.name} - {currentTournament.city}</h3>
                        <div className="d-flex mt-4 ml-4 ">
                            <p className="mr-4 text-white">Court Surface: {currentTournament.surface}</p>
                            <p className="mr-4 text-white">From: {currentTournament.start_date} - To: {currentTournament.end_date}</p>
                        </div>
                        <div className="row d-flex justify-content-around">
                            <CurrentTournament matches={currentMatches} />
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default CurrentTournamentsPage
