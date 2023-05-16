const API_KEY = "CD9EC412F67241FF96FF5F25ADB2CECC64C02BFB";

const url = "https://api.cnu.ac.kr/svc/offcam/pub/WifiAllInfo?AUTH_KEY=";

export async function call_api() {
    fetch(url+API_KEY).then(response => response.json()).then(data => {
        console.log(data);
        console.log(new Date().toLocaleString());
    }).catch(error => {
    console.error("Error fetching data:", error);
  });
};