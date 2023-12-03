import axios from 'axios';
//Api
export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization:
      'Bearer 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',
  },
});
