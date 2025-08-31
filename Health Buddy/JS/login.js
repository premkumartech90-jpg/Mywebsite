// Replace with your YouTube Data API v3 key
const API_KEY = "AIzaSyBGD0uPp1GFQQZ8P0gPwDT6MvrUMEVz1RU";

document.getElementById("searchBtn").addEventListener("click", searchVideos);

function searchVideos() {
  const query = document.getElementById("searchQuery").value.trim();
  if (!query) {
    alert("Please enter a search term");
    return;
  }

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=6&q=${encodeURIComponent(query)}&key=${API_KEY}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.items && data.items.length > 0) {
        displayResults(data.items);
      } else {
        alert("No videos found.");
        document.getElementById("results").innerHTML = "";
      }
    })
    .catch(err => {
      console.error("Error fetching YouTube API:", err);
      alert("Failed to fetch videos");
    });
}

function displayResults(videos) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  videos.forEach(video => {
    const videoId = video.id.videoId;
    const title = video.snippet.title;
    const thumbnail = video.snippet.thumbnails.medium.url;
    const channelTitle = video.snippet.channelTitle;

    const videoCard = document.createElement("div");
    videoCard.classList.add("video-card");

    videoCard.innerHTML = `
      <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
        <img src="${thumbnail}" alt="${title}">
      </a>
      <div class="video-info">
        <h3>${title}</h3>
        <p>${channelTitle}</p>
      </div>
    `;

    resultsDiv.appendChild(videoCard);
  });
}
