import api from "./api"

export interface Information {
  id: number
  profilePic: string
  name: string
  office: string
  resume: string
}

export const updateInformation = async (
  information: Information
): Promise<Information> => {
  const response = await api.put<Information>(
    `/informacoes/${information.id}`,
    information
  )
  return response.data
}

export const getInformation = async (): Promise<Information> => {
  const response = await api.get<Information>("/informacoes/1")
  return response.data
}
