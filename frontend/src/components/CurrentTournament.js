import React from 'react'

function CurrentTournament({ matches }) {
    return (
        <>
            {matches.map(match => {
                const result = match.result
                return <div className="card col-sm-8 col-md-5 m-4 match-container" key={match.id}>
                    <div className="bg-transparent px-2">
                        <h4 className="mt-4">{match.title}</h4>
                        <div className="d-flex">
                            <p className="mr-4"><b>Round: </b> {match.round_name}</p>
                            <p className="mr-4"><b>Court: </b> {match.court}</p>
                        </div>
                        {result ? 
                            <>
                            <h5>Result</h5>
                            <div className="d-flex mb-2">
                                {result.home_set3 ?
                                    <>
                                        <p className="mr-2">{result.home_set1} - {result.away_set1}{!result.home_tb1 ? <></> : result.home_tb1 > result.away_tb1 ? <>({result.away_tb1})</> : <>({result.home_tb1})</>},</p>
                                        <p className="mr-2">{result.home_set2} - {result.away_set2}{!result.home_tb2 ? <></> : result.home_tb2 > result.away_tb2 ? <>({result.away_tb2})</> : <>({result.home_tb2})</>},</p>
                                        <p className="mr-2">{result.home_set3} - {result.away_set3}{!result.home_tb3 ? <></> : result.home_tb3 > result.away_tb3 ? <>({result.away_tb3})</> : <>({result.home_tb3})</>}</p>
                                    </>
                                    : <>
                                        <p className="mr-2">{result.home_set1} - {result.away_set1}{!result.home_tb1 ? <></> : result.home_tb1 > result.away_tb1 ? <>({result.away_tb1})</> : <>({result.home_tb1})</>},</p>
                                        <p className="mr-2">{result.home_set2} - {result.away_set2}{!result.home_tb2 ? <></> : result.home_tb2 > result.away_tb2 ? <>({result.away_tb2})</> : <>({result.home_tb2})</>}</p>
                                    </>
                                }
                            </div>
                        </>
                            : <h5>Starts at {match.date.substring(11, 16)} GMT</h5>
                        }
                    </div>
                    </div>
            })}
        </>
    )
}

export default CurrentTournament
