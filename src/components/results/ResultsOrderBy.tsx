import React, { FunctionComponent } from 'react'
import { ORDER_BY_DATE, ORDER_BY_COMMITS } from '../../utils/constants'

interface ResultsOrderByProps {
    orderBy: string
    setOrderby: Function
}
const ResultsOrderBy: FunctionComponent<ResultsOrderByProps> = ({
    orderBy,
    setOrderby,
}) => (
    <section className="result-order-block">
        <header>Order results by:</header>
        <section className="result-order-items">
            <div
                className={orderBy === ORDER_BY_DATE ? 'selected' : ''}
                onClick={() => setOrderby(ORDER_BY_DATE)}
            >
                Most recent
            </div>
            <div
                className={orderBy === ORDER_BY_COMMITS ? 'selected' : ''}
                onClick={() => setOrderby(ORDER_BY_COMMITS)}
            >
                Most commits
            </div>
        </section>
    </section>
)

export default ResultsOrderBy
