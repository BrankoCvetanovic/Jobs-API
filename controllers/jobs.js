async function getAllJobs(req, res) {
  res.send("get All Jobs");
}
async function getJob(req, res) {
  res.send("get job");
}
async function createJob(req, res) {
  res.send("create job");
}
async function updateJob(req, res) {
  res.send("update job");
}
async function deleteJob(req, res) {
  res.send("delete job");
}

module.exports = { getAllJobs, getJob, updateJob, createJob, deleteJob };
