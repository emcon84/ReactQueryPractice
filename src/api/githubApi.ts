import axios  from 'axios';

export const githubApi = axios.create({
    baseURL:'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    },
})