export class CreateFrame {
  constructor() {
    this.init();
  }

  async init() {
    const frame = document.getElementById("frame");
    if (!frame) {
      console.error("Element with id 'frame' not found!");
      return;
    }

    try {
      const catUrl = await this.getCat();
      if (catUrl) {
        frame.src = catUrl;
      } else {
        console.error("Failed to get a cat image URL.");
      }
    } catch (error) {
      console.error("Error fetching cat image:", error);
    }
  }

  async getCat() {
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://api.thecatapi.com",
        "Access-Control-Allow-Methods": "GET",
        // "Access-Control-Allow-Headers": "Content-Type, Authorization"

      }
    };

    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1', options);

    const data = await response.json();
    return data[0]?.url;
  }
}