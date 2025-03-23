const apiKeyForNews = "98b015ea23fe1c48e0824579120bc116"; //GNEWS
const newsRenderEl = document.querySelector(".news-render");

function renderFunction(resultForNews) {
  if (resultForNews.articles.length === 0) {
    // 1. ALIGN ITEMS TO LEFT INSIDE newsRenderEl
    newsRenderEl.style.alignItems = "unset";
    const newsTitle = document.createElement("em");
    newsTitle.classList.add("news-content");
    newsTitle.textContent = "No top headlines for now...";
    newsRenderEl.appendChild(newsTitle);
  }

  // CASE 2: MORE THAN 5 RESULTS FOUND
  if (resultForNews.articles.length > 5) {
    // 1. ALIGN ITEMS TO LEFT INSIDE newsRenderEl
    newsRenderEl.style.alignItems = "unset";
    for (let i = 0; i < 5; i++) {
      // Create news title element
      const newsTitle = document.createElement("li");
      newsTitle.classList.add("news-content");
      newsTitle.textContent = resultForNews.articles[i].title;

      // Create news URL element
      const newsUrl = document.createElement("a");
      newsUrl.href = resultForNews.articles[i].url;
      newsUrl.textContent = resultForNews.articles[i].url;
      newsUrl.target = "_blank";

      // Append the news title and URL to the container
      newsRenderEl.appendChild(newsTitle);
      newsRenderEl.appendChild(newsUrl);
    }

    // CASE 3: MORE THAN 0 BUT LESS THAN 6 RESULTS FOUND
  } else {
    // 1. ALIGN ITEMS TO LEFT INSIDE newsRenderEl
    newsRenderEl.style.alignItems = "unset";
    for (let i = 0; i < resultForNews.articles.length; i++) {
      // Create news title element
      const newsTitle = document.createElement("li");
      newsTitle.classList.add("news-content");
      newsTitle.textContent = resultForNews.articles[i].title;

      // Create news URL element
      const newsUrl = document.createElement("a");
      newsUrl.href = resultForNews.articles[i].url;
      newsUrl.textContent = resultForNews.articles[i].url;
      newsUrl.target = "_blank";

      // Append the news title and URL to the container
      newsRenderEl.appendChild(newsTitle);
      newsRenderEl.appendChild(newsUrl);
    }
  }
}

export default async function newsFunction(query) {
  try {
    // 0. DELETE ALL CONTENT INSIDE newsRenderEl
    newsRenderEl.innerHTML = "";
    // 1. ALIGN ITEMS TO CENTER INSIDE newsRenderEl
    newsRenderEl.style.alignItems = "center";
    // 2. DISPLAY LOADING...AT THE CENTER OF newsRenderEl
    newsRenderEl.textContent = "Loading...";
    // 3. CREATE SPINNER EL
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    spinner.id = "spinner";
    // 4. ADD SPINNER AS CHILD EL TO newsRenderEl
    newsRenderEl.appendChild(spinner);
    // 5. DISPLAY SPINNER
    spinner.style.display = "block";

    // 6. FETCH FOR NEWS
    const resForNews = await fetch(
      `https://gnews.io/api/v4/top-headlines?category=${query}&lang=ja&country=jp&apikey=${apiKeyForNews}`,
      {
        mode: "cors", // Explicitly request CORS mode
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)", // Mimics a browser request
        },
      }
    );
    const resultForNews = await resForNews.json();
    // 7. REMOVE LOADING...FROM newsRenderEl
    newsRenderEl.textContent = "";
    // 8. REMOVE SPINNER
    spinner.style.display = "none";
    // 9. RENDER resultForNews

    renderFunction(resultForNews);
  } catch (error) {
    console.log(error);
    // 7.2 REPLACE "LOADING..." WITH "ERROR FETCHING NEWS"
    newsRenderEl.textContent = `ERROR FETCHING NEWS: ${error.message}`;
    // 7.3 REMOVE "ERROR FETCHING NEWS" AFTER 5000ms
    setTimeout(() => {
      newsRenderEl.textContent = "";
    }, 5000);
    // 8.2 REMOVE SPINNER
    spinner.style.display = "none";
  } finally {
    console.log("doing something here later");
  }
}
