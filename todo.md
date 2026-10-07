# Extending This App
Here are some ways to build on this project:

## Add more tools
### Give the agent additional capabilities:

 - [ ] File upload tool - Let users upload documents dynamically instead of pre-loading them
 - [ ] Search tool - Add semantic search over documents using embeddings
 - [ ] Write tool - Allow the agent to create summaries or reports and save them

### Improve the data pipeline
 - [ ] Load files from cloud storage (S3, Vercel Blob) instead of the local filesystem
 - [ ] Connect to a database to query structured data alongside the transcripts
 - [ ] Add a tool that fetches files on-demand rather than pre-loading everything

### Enhance the UI
 - [ ] Add chat history persistence with a database
 - [ ] Show a file tree of what's available in the sandbox
 - [ ] Add authentication to restrict access

### Use bash-tool
 - [ ] The bash-tool package abstracts the complexity of writing and reading files from the filesystem and integrates seamlessly with Vercel Sandbox and the AI SDK.