import { createComponent } from "@lit-labs/react";
import * as React from "react";
import {IxVideo} from "@imgix/web-components";


export const Video = createComponent(React, "ix-video", IxVideo, {
  onactivate: "activate",
  onchange: "change",
});


function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          {/* <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div> */}
          <div style={{ height: 500, width: 500 }}>
            <Video
              width="480"
              height="255"
              controls
              source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
            />
          </div>
       
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home page</h1>
            <p>
              Eorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
