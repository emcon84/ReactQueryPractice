import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Issues, State } from "../interfaces"
import { sleep } from "../../helpers/sleep";

interface Props {
    state?: State;
    labels: string[];
}

const getIssues = async (lablels: string[] = [], state?: State): Promise<Issues[]> => {

    await sleep(2);

    // console.log(data);

    const params = new URLSearchParams();

    if (state) params.append('state', state);

    if (lablels.length > 0) {
        const labelString = lablels.join(',');
        params.append('labels', labelString);
    }

    params.append('page', '1');
    params.append('per_page', '5');

    const { data } = await githubApi.get<Issues[]>('/issues', { params });
    return data;
}


export const useIssues = ({ state, labels }: Props) => {

    const issuesQuery = useQuery(
        ['issues', { state, labels }],
        () => getIssues(labels, state),

    )


    return {
        issuesQuery,
    }
}
