import React from "react";

export default function StoreLocator() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <iframe
          title="store_locator"
          width={400}
          height={320}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Barasat,+Kolkata,+West+Bengal/@22.7225126,88.4649025&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder={0}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        ></iframe>
      </div>
    </div>
  );
}
