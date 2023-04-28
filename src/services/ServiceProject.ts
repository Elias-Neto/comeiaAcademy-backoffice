import api from "./api"

export interface Project {
  id: number
  title: string
  link: string
  image: string
}

export const createProject = async (project: Project) => {
  const response = await api.post("/projetos", project)
  return response.data
}

export const getProjects = async () => {
  const response = await api.get("/projetos")
  return response.data
}

export const getProjectById = async (id: number) => {
  const response = await api.get(`/projetos/${id}`)
  return response.data
}

export const updateProject = async (id: number, project: Project) => {
  const response = await api.put(`/projetos/${id}`, project)
  return response.data
}

export const deleteProject = async (id: number) => {
  const response = await api.delete(`/projetos/${id}`)
  return response.data
}

export const createOrUpdateProject = async (project: Project) => {
  if (project.id) {
    return updateProject(project.id, project)
  } else {
    return createProject(project)
  }
}
