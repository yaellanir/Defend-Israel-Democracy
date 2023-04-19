import React from "react";
import "./EventsPage.css";

function EventsPage() {
  return (
    <div id="events" className="events-wrapper">
      {/* <div className="eventsText">Events</div>
      <div
        className="fb-page"
        data-tabs="events"
        data-href="https://www.facebook.com/DefendIsraeliDemocracy"
        // data-href="https://www.facebook.com/YoloBookStore"
        data-width="380"
        data-hide-cover="false"
      ></div> */}
      {/* <div
        className="fb-page"
        data-href="https://www.facebook.com/DefendIsraeliDemocracy"
        // data-href="https://www.facebook.com/watch/?v=2185176135151232"
        data-tabs="timeline"
        data-width="380"
        // data-height=""
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="true"
        data-show-facepile="false"
      >
        <blockquote
          cite="https://www.facebook.com/DefendIsraeliDemocracy"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/DefendIsraeliDemocracy">
            ‎נאבקים על הדמוקרטיה בבית Defend Israeli Democracy‎
          </a>
        </blockquote>
      </div> */}
      <div
        className="fb-post"
        data-href="https://www.facebook.com/watch/?v=2185176135151232"
        data-width="380"
      ></div>
    </div>
  );
}

export default EventsPage;
