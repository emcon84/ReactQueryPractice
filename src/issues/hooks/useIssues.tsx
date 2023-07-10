import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Issues } from "../interfaces"



const getIssues = async (): Promise<Issues[]> => {
    const { data } = await githubApi.get<Issues[]>('/issues');
    console.log(data);
    return data;
}


export const useIssues = () => {

    const issuesQuery = useQuery(
        ['issues'],
        getIssues,

    )


    return {
        issuesQuery,
    }
}
