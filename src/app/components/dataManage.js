import useSWR, { preload } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function preloadData(url) {
  preload(url, fetcher);
}

function useProject() {
  const { data, error, isLoading } = useSWR("/api/projects", fetcher);

  return { data, error, isLoading };
}

function useProjectDetail(id) {
  const { data, error, isLoading } = useSWR(`/api/projects/${id}`, fetcher);

  return { data, error, isLoading };
}

module.exports = { preloadData, useProject, useProjectDetail };
