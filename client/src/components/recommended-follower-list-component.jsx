import React from 'react'

const RecommendedFollowerListComponent = () => {
  const isFollow = true
  return (
    <div
      style={{
        width: "273px",
        position: "fixed",
        zIndex: "1",
        overflowX: "hidden",
        left: "997px",
      }}
      className="card border-white vh-100 bg-white"
    >
      <nav
        style={{ height: "78px" }}
        className="navbar navbar-light bg-light mt-1 border-bottom"
      >
        <div className="container mx-3">
          <h4 className="card-title m-0">推薦跟隨</h4>
        </div>
      </nav>

      <div style={{ height: "82px" }} className="d-flex flex-row bg-light">
        <div
          style={{ width: "50px", height: "50px", backgroundColor: "#FF6600" }}
          className="rounded-circle overflow-hidden align-self-center ms-3 me-0"
        >
          <a href={`/users/id/tweets`}>
            <img
              src="/icon/avatar.jpg"
              style={{
                aspectRatio: "1 / 1",
                width: "50px",
                objectFit: "cover",
                objectPosition: "center",
              }}
              alt="avatar"
            />
          </a>
        </div>
        <div
          style={{ maxWidth: "93px" }}
          className="container align-self-center ms-1 pe-0"
        >
          <h5
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
            className="m-0 word-break:break-all;"
          >
            name
          </h5>
          <small>
            <p
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
              className="m-0 text-muted word-break:break-all;"
            >
              @account
            </p>
          </small>
        </div>
        <div className="align-self-center ms-0 me-3 p-0 text-end">
          {isFollow ? (
            <form action={`/followships/id?_method=DELETE`} method="POST">
              <button
                type="submit"
                style={{
                  backgroundColor: "#FF6600",
                  color: "#ffffff",
                  height: "40px",
                  borderRadius: "30px",
                }}
                className="btn"
              >
                正在跟隨
              </button>
            </form>
          ) : (
            <form action={`/followships/id`} method="POST">
              <button
                type="submit"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#FF6600",
                  borderColor: "#FF6600",
                  height: "40px",
                  borderRadius: "30px",
                }}
                className="btn"
              >
                跟隨
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecommendedFollowerListComponent