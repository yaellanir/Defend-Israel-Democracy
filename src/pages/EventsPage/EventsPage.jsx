import React from "react";
import Iframe from "react-iframe";
import { FacebookEmbed } from "react-social-media-embed";
import "./EventsPage.css";

function EventsPage() {
  return (
    <div id="events" className="events-wrapper">
      <div className="mailing-text">Follow our Events</div>
      <figure className="op-interactive">
        <Iframe
          class="column-width"
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fstory.php%3Fstory_fbid%3Dpfbid0VnJahsevPpUTHh6MAKbkaRUe3yxyCdSLK5UCAWgGx7wGuEj8oCeR7ZKsDhAtJdFMl%26id%3D100063681241463&width=380&show_text=true&height=363&appId"
          width="380"
          height="363"
          style={{
            color: "white",
            backgroundColor: "white",
            border: "none",
            overflow: "hidden",
          }}
          scrolling="yes"
          frameborder="0"
          allowfullscreen
          data-show-text="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></Iframe>
      </figure>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FacebookEmbed
          // url="https://www.facebook.com/andrewismusic/posts/451971596293956"
          url="https://www.facebook.com/story.php?story_fbid=pfbid0VnJahsevPpUTHh6MAKbkaRUe3yxyCdSLK5UCAWgGx7wGuEj8oCeR7ZKsDhAtJdFMl&id=100063681241463"
          width={360}
          height={800}
        />
      </div>
    </div>
  );
}

export default EventsPage;
