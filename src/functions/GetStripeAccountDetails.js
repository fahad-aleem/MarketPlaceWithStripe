import axios from "axios";

async function GetStripeAccountDetails(stripe_account_id) {
  try {
    const details = await axios.get(
      `http://localhost:3000/get-account-information/${stripe_account_id}`
    );
    return details.data;
  } catch (err) {
    return err.message;
  }
}

export default GetStripeAccountDetails;
