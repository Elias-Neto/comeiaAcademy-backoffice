import api from "./api"

export interface Experience {
  id: number
  title: string
  description: string
  type: string
  startYear: number | ""
  endYear: number | ""
}

export const createExperience = async (
  experience: Experience
): Promise<Experience> => {
  const response = await api.post("/experiencias", experience)
  return response.data
}

export const getExperiences = async (): Promise<Experience[]> => {
  const response = await api.get("/experiencias")
  return response.data
}

export const getAcademicExperiences = async (): Promise<Experience[]> => {
  const response = await api.get("/experiencias?type=academica")
  return response.data
}

export const getProfessionalExperiences = async (): Promise<Experience[]> => {
  const response = await api.get("/experiencias?type=profissional")
  return response.data
}

export const getExperienceById = async (id: number): Promise<Experience> => {
  const response = await api.get(`/experiencias/${id}`)
  return response.data
}

export const updateExperience = async (
  id: number,
  experience: Experience
): Promise<Experience> => {
  const response = await api.put(`/experiencias/${id}`, experience)
  return response.data
}

export const deleteExperience = async (id: number): Promise<Experience> => {
  const response = await api.delete(`/experiencias/${id}`)
  return response.data
}

export const createOrUpdateExperience = async (
  experience: Experience
): Promise<Experience> => {
  if (experience.id) {
    return updateExperience(experience.id, experience)
  } else {
    return createExperience(experience)
  }
}
