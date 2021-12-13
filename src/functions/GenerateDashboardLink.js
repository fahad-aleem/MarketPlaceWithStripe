import axios from "axios";

async function GenerateDashboardLink(accountId) {
  try {
    const dashboard = await axios.get(
      `http://localhost:3000/create-dashboard-link/${accountId}`
    );
    return dashboard.data.url;
  } catch (err) {
    console.log(err);
  }
}

export default GenerateDashboardLink;
