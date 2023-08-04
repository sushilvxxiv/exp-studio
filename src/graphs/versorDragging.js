import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { geoPath, geoNaturalEarth1, geoRotation } from "d3-geo";
import { select, pointers } from "d3-selection";
import { drag } from "d3-drag";
// import { geoRotationIdentity } from "d3-geo-projection";
import { feature } from "topojson-client";
import land50mData from "./land50m.json";
import land110mData from "./land110m.json";
import * as d3 from 'd3';

function geoRotationIdentity(rotate) {
    rotate[0] %= 360;
    rotate[1] %= 360;
    rotate[2] %= 360;
    return rotate.length === 3 ? rotate : [rotate[0] || 0, rotate[1] || 0, rotate[2] || 0];
  }

const Globe = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([0, 0], 2);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    const width = 800;
    const height = 600;
    const projection = geoNaturalEarth1().rotate([0, 0]).fitSize([width, height], { type: "Sphere" });

    const context = select(map.getPane("overlayPane")).append("canvas")
      .attr("width", width)
      .attr("height", height)
      .node().getContext("2d");

    const path = geoPath(projection, context);

    const land50m = feature(land50mData, land50mData.objects.land);
    const land110m = feature(land110mData, land110mData.objects.land);

    function render(land) {
      context.clearRect(0, 0, width, height);
      context.beginPath(); path({type: "Sphere"}); context.fillStyle = "#fff"; context.fill();
      context.beginPath(); path(land); context.fillStyle = "#000"; context.fill();
      context.beginPath(); path({type: "Sphere"}); context.stroke();
    }

    function pointer(event) {
        const t = event.touches;
        if (t && t.length !== l) {
          l = t.length;
          if (l > 1) a0 = Math.atan2(t[1].clientY - t[0].clientY, t[1].clientX - t[0].clientX);
          dragstarted.apply(this, [event]);
        }
      
        if (l > 1) {
          const x = d3.mean(t, p => p.clientX);
          const y = d3.mean(t, p => p.clientY);
          const a = Math.atan2(t[1].clientY - t[0].clientY, t[1].clientX - t[0].clientX);
          return [x, y, a];
        }
      
        return [t[0].clientX, t[0].clientY];
      }

      function dragstarted(event) {
        const t = event.touches || [event];
        v0 = projection.invert([t[0].clientX, t[0].clientY]);
        q0 = geoRotation(projection.rotate());
      }

      function dragged(event) {
        const t = event.touches || [event];
        const v1 = projection.invert([t[0].clientX, t[0].clientY]);
        const delta = [v1[0] - v0[0], v1[1] - v0[1]];
        let q1 = q0;
      
        if (l > 1) {
          const p = pointer(event);
          if (p[2]) {
            const d = (p[2] - a0) / 2;
            const s = -Math.sin(d);
            const c = Math.sign(Math.cos(d));
            q1 = geoRotationIdentity([-s * 180 / Math.PI, 0, c * 180 / Math.PI]);
          }
        }
      
        projection.rotate(geoRotation(q1).invert(delta));
      
        if (delta[0] < 0.7) dragstarted(event);
        render(land110m);
      }

    let v0, q0, a0, l = 0;
    select(context.canvas).call(drag().on("start", dragstarted).on("drag", dragged));
    render(land50m);

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} style={{ width: "800px", height: "600px" }} />;
};

export default Globe;
