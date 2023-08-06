// Initializing required variables
mapboxgl.accessToken = "{apiKeyHere}";

let map = null;
let marker = new mapboxgl.Marker();

// Returns location data of entered IP
async function getIPdata(ip = "") {
  let res = null;
  try {
    res = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey={apiKeyHere}&ipAddress=${ip}&domain=${ip}`
    );
  } catch (err) {
    setTimeout(() => {
      alert("Please enter a valid IP address or domain");
    }, 700);
    $(".ip-inp").val("");
    $(".d-content").text("-");
    shiftMapCenter([0, 0], -1, false);
    return;
  }
  return res.data;
}

function fillOutDetails(data) {
  $("#ip-address").text(data.ip);
  $("#location").text(
    `${data.location.city}, ${data.location.region}, ${data.location.country}, ${data.location.postalCode}`
  );
  $("#timezone").text(`${data.location.timezone}`);
  $("#isp").text(`${data.isp}`);
}

// Scrolls to the location to the IP entered by user
function shiftMapCenter(geoLocation, zoom, needMarker) {
  map.flyTo({
    center: geoLocation,
    zoom,
    // easing(t) {
    //   return t;
    // },
  });

  if (needMarker) marker.setLngLat(geoLocation).addTo(map);
  else marker.remove();
}

// Rendering map for first time - defaults to client's location
(async function renderDefaultMap() {
  map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [0, 0],
    zoom: -1,
  });
})();

$(".get-ip").submit((e) => {
  e.preventDefault();
  const val = $(".ip-inp").val();
  (async () => {
    const data = await getIPdata(val);
    const { lng, lat } = data.location;
    fillOutDetails(data);
    shiftMapCenter([lng, lat], 7, true);
  })();
});
