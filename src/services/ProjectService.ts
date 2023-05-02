import api from "./api"

export interface Project {
  id: number
  title: string
  description: string
  demonstration: string
  github: string
  deploy: string
}

export const createProject = async (project: Project) => {
  const response = await api.post("/portfolio", project)
  return response.data
}

export const getProjects = async () => {
  const response = await api.get("/portfolio")
  return response.data
}

export const getProjectById = async (id: number) => {
  const response = await api.get(`/portfolio/${id}`)
  return response.data
}

export const updateProject = async (id: number, project: Project) => {
  const response = await api.put(`/portfolio/${id}`, project)
  return response.data
}

export const deleteProject = async (id: number) => {
  const response = await api.delete(`/portfolio/${id}`)
  return response.data
}

export const createOrUpdateProject = async (project: Project) => {
  if (project.id) {
    return updateProject(project.id, project)
  } else {
    return createProject(project)
  }
}
