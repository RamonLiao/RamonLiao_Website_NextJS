// import useSWR, { preload, unstable_serialize } from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// function preloadData(url) {
//   preload(url, fetcher);
// }

// function getProject(shouldPreload = false) {
//   const { data, error, isLoading } = useSWR(
//     shouldPreload ? "/api/projects" : null,
//     fetcher
//   );

//   return { data, error, isLoading };
// }

// function getProjectDetail(id, shouldPreload = false) {
//   const { data, error, isLoading } = useSWR(
//     shouldPreload ? `/api/projects/${id}` : null,
//     fetcher
//   );

//   return { data, error, isLoading };
// }

// module.exports = { preloadData, getProject, getProjectDetail };
