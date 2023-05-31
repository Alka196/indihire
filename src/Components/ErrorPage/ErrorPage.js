import React from 'react';
import './ErrorPage.scss'

const ErrorPage = () => {
  const linkStyle = {
    visibility: 'visible',
  };

  return (
    <>
      <div id="error-404">
        <h1>404</h1>
        <h2>Page Not Found</h2>

        <a
          className="nectar-button large regular-button accent-color has-icon"
          data-color-override="false"
          data-hover-color-override="false"
          href="https://indihire.com"
          style={linkStyle}
        >
          <span>Back Home </span>
          <i className="icon-button-arrow"></i>
        </a>
      </div>
    </>
  );
};

export default ErrorPage;
