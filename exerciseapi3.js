const url = "https://random-data-api.com/api/v2/users?size=10&is_xml=true";

const randomUserFilter = (data) => {
  return data
    .filter((e) => e.subscription.plan === "Diamond")
    .map(({ username, email, subscription }) => ({
      username,
      email,
      plan: subscription.plan,
    }));
};
const randomUser = async () => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const resultFinal = randomUserFilter(result);
    console.log(resultFinal);
  } catch (error) {
    console.log("Fetch error: ", error);
  }
};

randomUser();
