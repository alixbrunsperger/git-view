import React, { FunctionComponent, Fragment } from 'react'
import ResultsElement from './ResultsElement'
import ResultsPagination from './ResultsPagination'
import { ResultType } from '../../types/types'

interface ResultsListProps {
    results: ResultType[]
    selectedRepoName?: string
    setSelectedRepoName: Function
}
const ResultsList: FunctionComponent<ResultsListProps> = ({
    results,
    selectedRepoName,
    setSelectedRepoName,
}) => (
    <section className="result-list" id="list">
        {results && (
            <Fragment>
                {results.map((result, index) => (
                    <ResultsElement
                        key={`result-${index}`}
                        selectedRepoName={selectedRepoName}
                        setSelectedRepoName={setSelectedRepoName}
                        result={result}
                    />
                ))}
                <ResultsPagination />
            </Fragment>
        )}
    </section>
)

export default ResultsList
