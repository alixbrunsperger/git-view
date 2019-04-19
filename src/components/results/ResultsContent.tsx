import React, { FunctionComponent, Fragment } from 'react'
import ResultsCommitElement from './ResultsCommitElement'
import ResultsDisplayElement from './ResultsDisplayElements'
import { ResultType, DisplayElementType } from '../../types/types'
import moment from 'moment'
import _ from 'lodash'
import { DATE_FORMAT } from '../../utils/constants'
import { getUserLink, getRepositoryLink } from '../../utils/dataTransform'

interface ResultsContentProps {
    selectedRepo?: ResultType
    issues: DisplayElementType[]
    pullRequests: DisplayElementType[]
}

const ResultsContent: FunctionComponent<ResultsContentProps> = ({
    selectedRepo,
    issues,
    pullRequests,
}) => {
    const filteredIssues = selectedRepo
        ? _.filter(issues, issue => issue.repository.name === selectedRepo.name)
        : []
    const filteredPullRequests = selectedRepo
        ? _.filter(
              pullRequests,
              pullrequest => pullrequest.repository.name === selectedRepo.name
          )
        : []

    return (
        <Fragment>
            {selectedRepo && (
                <section className="result-content">
                    <article className="result-data">
                        <header>
                            <div className="title">{selectedRepo.name}</div>
                            <div>
                                <span className="line-title">owner:</span>{' '}
                                <a
                                    href={getUserLink(selectedRepo.owner.login)}
                                    target="_blank"
                                >
                                    {selectedRepo.owner.login}
                                </a>
                            </div>
                        </header>
                        <div className="result-user-link">
                            <span className="line-title">repo link:</span>{' '}
                            <a
                                href={getRepositoryLink(
                                    selectedRepo.owner.login,
                                    selectedRepo.name
                                )}
                                target="_blank"
                            >
                                {selectedRepo.name}
                            </a>
                        </div>
                        <div className="result-languages">
                            <span className="line-title">languages:</span>
                            {selectedRepo.languages.nodes.map(
                                (language, index) => (
                                    <span
                                        key={`language-${index}`}
                                        className={`badge ${
                                            language.name ===
                                            selectedRepo.primaryLanguage.name
                                                ? 'main'
                                                : ''
                                        }`}
                                    >
                                        {language.name}
                                    </span>
                                )
                            )}
                        </div>
                        <span className="line-title">created :</span>{' '}
                        {moment(selectedRepo.createdAt).format(DATE_FORMAT)}
                        <div className="commit-list">
                            <header>
                                <span className="line-title">Commits :</span>
                            </header>
                            {selectedRepo.commits.length > 0 ? (
                                selectedRepo.commits.map((commit, index) => (
                                    <ResultsCommitElement
                                        key={`commit-${index}`}
                                        commit={commit}
                                    />
                                ))
                            ) : (
                                <div>No commits to show</div>
                            )}
                        </div>
                        <div className="pull-requests-list">
                            <header>
                                <span className="line-title">
                                    Pull requests :
                                </span>
                            </header>
                            <section className="pull-requests-elements">
                                {filteredPullRequests.length > 0 ? (
                                    filteredPullRequests.map(
                                        (pullRequest, index) => (
                                            <ResultsDisplayElement
                                                key={`pullRequest-${index}`}
                                                element={pullRequest}
                                            />
                                        )
                                    )
                                ) : (
                                    <section className="pull-requests-empty">
                                        No elements to display
                                    </section>
                                )}
                            </section>
                        </div>
                        <div className="issues-list">
                            <header>
                                <span className="line-title">Issues :</span>
                            </header>
                            <section className="issues-elements">
                                {filteredIssues.length > 0 ? (
                                    filteredIssues.map((issue, index) => (
                                        <ResultsDisplayElement
                                            key={`issue-${index}`}
                                            element={issue}
                                        />
                                    ))
                                ) : (
                                    <section className="issues-empty">
                                        No elements to display
                                    </section>
                                )}
                            </section>
                        </div>
                    </article>
                </section>
            )}
        </Fragment>
    )
}

export default ResultsContent
