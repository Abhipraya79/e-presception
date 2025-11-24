const BASE_URL = "http://localhost:8888/api";

export async function getObatPx(nama = "", page = 0, size = 20) {
  try {
    const url = `${BASE_URL}/obatrsp?nama=${encodeURIComponent(nama)}&page=${page}&size=${size}`;

    console.log("Fetching from URL:", url); // Debug log

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.metadata?.message || `HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("API Response:", result); // Debug log
    
    return result;
  } catch (error) {
    console.error("Error fetching obat:", error);
    return {
      data: [],
      metadata: {
        code: 500,
        message: error.message || "Gagal mengambil data obat"
      }
    };
  }
}