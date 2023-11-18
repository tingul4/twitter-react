import React from 'react'

const PostTweetComponent = () => {
  const user = {}
  return (
    <div
      style={{ padding: "16px 24px", height: "137px" }}
      className="d-flex flex-column mx-auto border-bottom border-5"
      data-bs-toggle="modal"
      data-bs-target="#myModalmain"
    >
      <div className="d-flex flex-row">
        <div
          style={{ width: "50px", height: "50px", backgroundColor: "#FF6600" }}
          className="rounded-circle overflow-hidden"
        >
          <img
            src={user?.avatar || "/icon/avatar.jpg"}
            style={{
              aspectRatio: "1 / 1",
              width: "50px",
              objectFit: "cover",
              objectPosition: "center",
            }}
            alt="avatar"
          />
        </div>

        <div style={{ marginLeft: "8px" }} className="d-flex flex-column">
          <p style={{ color: "#6C757D" }} className="ms-1 mt-2">
            有什麼新鮮事?
          </p>
        </div>
      </div>
      <div className="text-end mt-auto">
        <button
          className="btn py-1 px-3"
          style={{
            backgroundColor: "#FF6600",
            color: "white",
            borderRadius: "30px",
          }}
        >
          推文
        </button>
      </div>
    </div>
  );
}

export default PostTweetComponent