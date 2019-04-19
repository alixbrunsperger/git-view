import React, { Fragment, FunctionComponent } from 'react';
import Header from '../common/Header';
import ResultsContainer from '../results/ResultsContainer';
import { DataType, ResultType, DisplayElementType } from '../../types/types';
import { getResults, getIssues, getPullRequests } from '../../utils/dataTransform';
import "../../styles/style.scss";

interface MainProps {
  data: DataType;
}

const Main: FunctionComponent<MainProps> = ({ data }) => {
  const results: ResultType[] = getResults(data);
  const issues: DisplayElementType[] = getIssues(data)
  const pullRequests: DisplayElementType[] = getPullRequests(data);
  return (
    <Fragment>
      <Header {...data.user} />
      <section role="main">
        <ResultsContainer results={results} issues={issues} pullRequests={pullRequests} />
      </section>
    </Fragment>
  )
};

export default Main;