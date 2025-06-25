const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const AIRBNB_ICAL_URL = "https://www.airbnb.com/calendar/ical/TON_ID.ics?s=TON_TOKEN"; // ← remplace ici !

  try {
    const response = await fetch(AIRBNB_ICAL_URL);
    const icsData = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/calendar",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "max-age=300"
      },
      body: icsData
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Erreur lors du chargement du calendrier : ${error.message}`
    };
  }
};
