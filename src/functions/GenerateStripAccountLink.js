import axios from "axios";

async function handleGetStripeAccountLink(stripeAccount) {
  try {
    const link = await axios({
      method: "POST",
      url: "http://localhost:3000/create-account-link",
      data: {
        account: stripeAccount,
      },
    });
    return link.data;
  } catch (error) {
    console.log(error.message);
  }
}

export default handleGetStripeAccountLink;
