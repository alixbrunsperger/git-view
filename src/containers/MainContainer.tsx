import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Main from '../components/common/Main'
import { UserType } from '../types/types'

const GET_DATA = gql`
    query {
        user(login: "sazzer") {
            avatarUrl(size: 250)
            login
            name
            issues(last: 100) {
                nodes {
                    createdAt
                    title
                    repository {
                        name
                    }
                }
            }
            pullRequests(last: 100) {
                nodes {
                    createdAt
                    title
                    repository {
                        name
                    }
                }
            }
            contributionsCollection {
                commitContributionsByRepository {
                    contributions(last: 10) {
                        nodes {
                            commitCount
                            occurredAt
                        }
                    }
                    repository {
                        name
                    }
                }
            }
            repositories(last: 15) {
                nodes {
                    createdAt
                    name
                    owner {
                        login
                    }
                    languages(first: 10) {
                        nodes {
                            name
                        }
                    }
                    primaryLanguage {
                        name
                    }
                    updatedAt
                    description
                }
                totalCount
            }
        }
    }
`

interface Data {
    loading: boolean
    error: string
    user: UserType
}

interface Variables {
    first: number
}

class DataQuery extends Query<Data, Variables> {}

export default () => (
    <DataQuery query={GET_DATA}>
        {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`
            return (
                <Fragment>
                    {data ? (
                        <Main data={data} />
                    ) : (
                        <div>no data to display</div>
                    )}
                </Fragment>
            )
        }}
    </DataQuery>
)
