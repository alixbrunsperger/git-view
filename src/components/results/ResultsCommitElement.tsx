import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { DATE_FORMAT } from '../../utils/constants';
import { ContributionType } from '../../types/types';

interface ResultsCommitElementProps {
  commit: ContributionType
};
const ResultsCommitElement: FunctionComponent<ResultsCommitElementProps> = ({ commit }) => {
  return (
    <div className="commit-element">
      Date: {moment(commit.occurredAt).format(DATE_FORMAT)} <br />
      Numbers of commits : {commit.commitCount}
    </div>
  )
};

export default ResultsCommitElement;