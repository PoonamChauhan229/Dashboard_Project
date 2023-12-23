import React from "react";

const SingleAnimation = ({animationheader,cardbody1,cardbody2,cardbody3,cardbody4,cardbody5,dropDown1,dropDown2,dropDown3}) => {
  return (
    <div class="col-lg-6">
      <div class="card position-relative">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">
            {animationheader}
          </h6>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <code>{cardbody1}</code>
          </div>
          <div class="small mb-1">{cardbody2}</div>
          <nav class="navbar navbar-expand navbar-light bg-light mb-4">
            <a class="navbar-brand" href="/">
              {cardbody3}
            </a>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {cardbody4}
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right animated--grow-in"
                  aria-labelledby="navbarDropdown"
                >
                  <a class="dropdown-item" href="/">
                   {dropDown1}
                  </a>
                  <a class="dropdown-item" href="/">
                    {dropDown2}
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/">
                   {dropDown3}
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <p class="mb-0 small">{cardbody5}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleAnimation;
