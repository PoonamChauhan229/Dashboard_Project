import React from "react";

const SingleBorder = ({cardbody1,cardbody2,cardbody3,cardbody4,cardbody5,cardbody6,cardbody7,cardbody8,cardbody9,cardbodytext1,cardbodytext2,cardbodytext3,cardbodytext4,cardbodytext5,cardbodytext6,cardbodytext7,cardbodytext8,cardbodytext9}) => {
  return (
    <>
      <div class="col-lg-6">
        <div class={cardbody1}>
                 <div class="card-body">{cardbodytext1}</div>
        </div>

        <div class={cardbody2}>

          <div class="card-body">{cardbodytext2}</div>
        </div>

        <div class={cardbody3}>
                 <div class="card-body">{cardbodytext3}</div>
        </div>

        <div class={cardbody4}>
              <div class="card-body">{cardbodytext4} </div>
        </div>

        <div class={cardbody5}>
        <div class="card-body">{cardbodytext5}</div>
        </div>

        <div class={cardbody6}>
          <div class="card-body">{cardbodytext6}</div>
        </div>

        <div class={cardbody7}>
          <div class="card-body">{cardbodytext7} </div>
        </div>
      </div>
    </>
  );
};

export default SingleBorder;
