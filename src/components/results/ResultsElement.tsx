import React, { FunctionComponent, Fragment } from 'react'
import moment from 'moment'
import { DATE_FORMAT, mediaQueries } from '../../utils/constants'
import ResultsCommitElement from './ResultsCommitElement'
import { ResultType } from '../../types/types'
import { getRepositoryLink } from '../../utils/dataTransform'
import Media from 'react-media'

interface ResultsElementProps {
    result: ResultType
    selectedRepoName?: string
    setSelectedRepoName: Function
}
const ResultsElement: FunctionComponent<ResultsElementProps> = ({
    result,
    selectedRepoName,
    setSelectedRepoName,
}) => {
    const isSelected: boolean = selectedRepoName === result.name
    const imgAddon: string = isSelected ? '-up' : '-down'
    const cssAddon: string = isSelected ? 'selected' : ''
    const { nodes: languages } = result.languages

    const clickHandler: any = (isGreaterThanMobile: boolean): void => {
        if (isGreaterThanMobile) {
            window.scrollTo(0, 0)
            setSelectedRepoName(isSelected ? undefined : result.name)
        } else {
            setSelectedRepoName(selectedRepoName ? undefined : result.name)
        }
    }

    return (
        <Media query={`(min-width: ${mediaQueries.middle})`}>
            {isGreaterThanMobile => (
                <section
                    className={`result-element ${cssAddon}`}
                    onClick={() => clickHandler(isGreaterThanMobile)}
                >
                    <header>
                        <div className="repository-name">{result.name}</div>
                        <div>
                            <span className="line-title">owner:</span>{' '}
                            {result.owner.login}
                        </div>
                    </header>
                    <Media query={`(min-width: ${mediaQueries.middle})`}>
                        {matches =>
                            !matches && (
                                <Fragment>
                                    <div className="chevron">
                                        <picture>
                                            <img
                                                src={`./images/chevron${imgAddon}.png`}
                                            />
                                        </picture>
                                    </div>
                                    {isSelected && (
                                        <div className="element-content">
                                            <div className="element-link">
                                                <span className="line-title">
                                                    link:
                                                </span>{' '}
                                                <a
                                                    href={getRepositoryLink(
                                                        result.owner.login,
                                                        result.name
                                                    )}
                                                    target="_blank"
                                                >
                                                    {result.name}
                                                </a>
                                            </div>
                                            <div className="result-languages">
                                                <span className="line-title">
                                                    languages:
                                                </span>{' '}
                                                {languages.map(
                                                    (language, index) => (
                                                        <span
                                                            key={`language-${index}`}
                                                            className={`badge ${
                                                                language.name ===
                                                                result
                                                                    .primaryLanguage
                                                                    .name
                                                                    ? 'main'
                                                                    : ''
                                                            }`}
                                                        >
                                                            {language.name}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                            <span className="line-title">
                                                created :
                                            </span>{' '}
                                            {moment(result.createdAt).format(
                                                DATE_FORMAT
                                            )}
                                            <div className="commit-list">
                                                <header>
                                                    <span className="line-title">
                                                        Commits :
                                                    </span>
                                                </header>
                                                {result.commits.length > 0 ? (
                                                    result.commits.map(
                                                        (commit, index) => (
                                                            <ResultsCommitElement
                                                                key={`commit-${index}`}
                                                                commit={commit}
                                                            />
                                                        )
                                                    )
                                                ) : (
                                                    <div>
                                                        No commits to show
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </Fragment>
                            )
                        }
                    </Media>
                </section>
            )}
        </Media>
    )
}

export default ResultsElement
