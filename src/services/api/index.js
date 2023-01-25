import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://the-trivia-api.com/api/",
});

export const QuestionsAPI = {
  async getQuestions(settings) {
    const data = await httpClient.get(
      `questions?categories=${settings.category.join(",")}&limit=${
        settings.limit
      }&difficulty=${settings.difficulty}`
    );

    return data.data;
  },
};
