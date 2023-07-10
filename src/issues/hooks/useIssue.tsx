import { useQuery } from "@tanstack/react-query"
import { githubApi } from "../../api/githubApi"
import { Issues } from "../interfaces"
import { sleep } from "../../helpers/sleep"

const getIssueInfo = async (issueNumber: number): Promise<Issues> => {
    await sleep(2);
    const { data } = await githubApi.get<Issues>(`/issues/${issueNumber}`)
    console.log(data)
    return data;
}
const getIssueComments = async (issueNumber: number): Promise<Issues[]> => {
    await sleep(2);
    const { data } = await githubApi.get<Issues[]>(`/issues/${issueNumber}/comments`)
    console.log(data)
    return data;
}

export const useIssue = (issueNumber: number) => {

    const issueQuery = useQuery(
        ['issue', issueNumber],
        () => getIssueInfo(issueNumber)
    );
    const issueCommentsQuery = useQuery(
        ['issue', issueNumber, 'comments'],
        () => getIssueComments(issueQuery.data!.number),
        {
            enabled: issueQuery.data !== undefined,
        }
    );

    return {
        issueQuery,
        issueCommentsQuery
    }

}