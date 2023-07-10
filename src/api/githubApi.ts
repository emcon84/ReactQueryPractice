import axios from 'axios';
//Api
export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    },
})