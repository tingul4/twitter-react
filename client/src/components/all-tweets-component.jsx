import React from 'react'
import timeService from '../services/time-service'

const AllTweetsComponent = () => {
  return (
    <div className="col-12 mx-auto mt-2">
      <div style={{ padding: "16px 24px" }} className="mx-auto border-bottom">
        <div className="d-flex flex-row">
          <a className="" href={`/users/id/tweets`}>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#FF6600",
              }}
              className="rounded-circle overflow-hidden"
            >
              <img
                src={"/icon/avatar.jpg"}
                style={{
                  aspectRatio: "1 / 1",
                  width: "50px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                alt="avatar"
              />
            </div>
          </a>
          <div style={{ marginLeft: "8px" }} className="d-flex flex-column">
            <div className="d-flex flex-row">
              <div
                style={{ fontSize: "16px", fontWeight: "600" }}
                className="align-middle align-self-center"
              >
                name
              </div>
              <div
                style={{ fontSize: "14px", marginLeft: "8px" }}
                className="text-muted align-middle align-self-center"
              >
                @account • time
              </div>
            </div>

            <a
              href={`/tweets/id/replies`}
              style={{ textDecoration: "none", color: "#171725" }}
            >
              <div style={{ margin: "8px 0px" }} className="mx-auto">
                <p className="text-break">description</p>
              </div>
            </a>         
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTweetsComponent;