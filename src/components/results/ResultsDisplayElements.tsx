import React, { FunctionComponent } from 'react'
import moment from 'moment'
import { DATE_FORMAT } from '../../utils/constants'
import { DisplayElementType } from '../../types/types'

interface ResultsDisplayElementProps {
    element: DisplayElementType
}
const ResultsDisplayElement: FunctionComponent<ResultsDisplayElementProps> = ({
    element,
}) => {
    return (
        <div className="display-element">
            <span className="line-title">Title:</span> {element.title}
            <br />
            <span className="line-title">Repository:</span>{' '}
            {element.repository.name}
            <br />
            <span className="line-title">Created at:</span>{' '}
            {moment(element.createdAt).format(DATE_FORMAT)}
        </div>
    )
}

export default ResultsDisplayElement
