import api from "./api"

export interface Project {
  id: number
  title: string
  description: string
  demonstration: string
  github: string
  deploy: string
}

export const createProject = async (project: Project): Promise<Project> => {
  const response = await api.post("/portfolio", project)
  return response.data
}

export const getProjects = async (): Promise<Project[]> => {
  const response = await api.get("/portfolio")
  return response.data
}

export const getProjectById = async (id: number): Promise<Project> => {
  const response = await api.get(`/portfolio/${id}`)
  return response.data
}

export const updateProject = async (
  id: number,
  project: Project
): Promise<Project> => {
  const response = await api.put(`/portfolio/${id}`, project)
  return response.data
}

export const deleteProject = async (id: number): Promise<Project> => {
  const response = await api.delete(`/portfolio/${id}`)
  return response.data
}

export const createOrUpdateProject = async (
  project: Project
): Promise<Project> => {
  if (project.id) {
    return updateProject(project.id, project)
  } else {
    return createProject(project)
  }
}
