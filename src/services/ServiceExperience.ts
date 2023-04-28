import api from "./api"

export interface Experience {
  id: number
  title: string
  description: string
  type: string
  startYear: string
  endYear: string
}

export const createExperience = async (experience: Experience) => {
  const response = await api.post("/experiencias", experience)
  return response.data
}

export const getExperiences = async () => {
  const response = await api.get("/experiencias")
  return response.data
}

export const getExperienceById = async (id: number) => {
  const response = await api.get(`/experiencias/${id}`)
  return response.data
}

export const updateExperience = async (id: number, experience: Experience) => {
  const response = await api.put(`/experiencias/${id}`, experience)
  return response.data
}

export const deleteExperience = async (id: number) => {
  const response = await api.delete(`/experiencias/${id}`)
  return response.data
}

export const createOrUpdateExperience = async (experience: Experience) => {
  if (experience.id) {
    return updateExperience(experience.id, experience)
  } else {
    return createExperience(experience)
  }
}
