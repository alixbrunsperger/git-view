import React, { FunctionComponent, useCallback } from "react";
import Media from "react-media";
import { mediaQueries } from "../../utils/constants";
import { UserType } from '../../types/types';

const Header: FunctionComponent<UserType> = user => (
  <header className="main-header">
    <section className="user">
      {user.avatarUrl &&
        <picture>
          <img src={user.avatarUrl} alt="user avatar" />
        </picture>}
    </section>
    <section className="title">
      <section className="site-title">
        GIT view
      </section>
      <section className="user-info">
        <div className='label'><b>User :</b> {user.name}</div>
        <div className='label'><b>Login :</b> {user.login}</div>
      </section>
    </section>
    <section className="git">
      <picture>
        <img src="/images/octocat.png" alt="git icon" />
      </picture>
    </section>
  </header>
);

export default Header;
