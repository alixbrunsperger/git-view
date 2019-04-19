import React, { FunctionComponent, useState } from 'react'
import _ from 'lodash'
import moment from 'moment'
import ResultsOrderBy from './ResultsOrderBy'
import ResultsList from './ResultsList'
import ResultsContent from './ResultsContent'
import { ResultType, DisplayElementType } from '../../types/types'
import { ORDER_BY_DATE, mediaQueries } from '../../utils/constants'
import Media from 'react-media'

interface ResultsContainerProps {
    results: ResultType[]
    issues: DisplayElementType[]
    pullRequests: DisplayElementType[]
}
const ResultsContainer: FunctionComponent<ResultsContainerProps> = ({
    results,
    issues,
    pullRequests,
}) => {
    const [selectedRepoName, setSelectedRepoName] = useState(undefined)
    const [orderBy, setOrderby] = useState(ORDER_BY_DATE)

    const selectedRepo = selectedRepoName
        ? results.filter(result => result.name === selectedRepoName)[0]
        : undefined
    const orderedResults =
        orderBy === ORDER_BY_DATE
            ? _.sortBy(results, o => -moment(o.createdAt).format('x'))
            : _.sortBy(results, o => -o.commits.length)

    return (
        <section className="result">
            <ResultsOrderBy orderBy={orderBy} setOrderby={setOrderby} />
            <section className="result-header">
                Select a repository to see details
            </section>
            <ResultsList
                results={orderedResults}
                selectedRepoName={selectedRepoName}
                setSelectedRepoName={setSelectedRepoName}
            />
            <Media query={`(min-width: ${mediaQueries.middle})`}>
                {matches =>
                    matches && (
                        <ResultsContent
                            selectedRepo={selectedRepo}
                            issues={issues}
                            pullRequests={pullRequests}
                        />
                    )
                }
            </Media>
        </section>
    )
}

export default ResultsContainer
