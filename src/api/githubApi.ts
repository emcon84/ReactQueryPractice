import axios from 'axios';
//Api
export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    },
})