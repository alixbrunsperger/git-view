import React, { FunctionComponent } from 'react'
import { mediaQueries } from '../../utils/constants'
import Media from 'react-media'

interface ResultsPaginationProps {}
const ResultsPagination: FunctionComponent<ResultsPaginationProps> = () => {
    return (
        <Media query={`(min-width: ${mediaQueries.middle})`}>
            {matches =>
                matches ? (
                    <div className="pagination-numbers">
                        {`<< 1 2 3 4 5 >>`}
                    </div>
                ) : (
                    <button className="pagination-button">
                        See more results
                    </button>
                )
            }
        </Media>
    )
}

export default ResultsPagination
