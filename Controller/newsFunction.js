const apiKeyForNews = "1a58498af44a4f23a5a58734f793215b";
const newsRenderEl = document.querySelector(".news-render");

function renderFunction(resultForNews) {
  if (resultForNews.totalResults === 0) {
    const newsTitle = document.createElement("em");
    newsTitle.classList.add("news-content");
    newsTitle.textContent = "No top headlines for now...";
    newsRenderEl.appendChild(newsTitle);
  }

  // CASE 2: MORE THAN 5 RESULTS FOUND
  if (resultForNews.articles.length > 5) {
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
    // 1. DELETE ALL CONTENT INSIDE newsRenderEl
    newsRenderEl.innerHTML = "";

    // 2. FETCH FOR NEWS
    const resForNews = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKeyForNews}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0", // Mimics a browser request
        },
      }
    );
    const resultForNews = await resForNews.json();

    // 3. RENDER NEWS
    renderFunction(resultForNews);
  } catch (error) {
    console.log("ERROR:", error.message);
  } finally {
    console.log("doing something here later");
  }
}
