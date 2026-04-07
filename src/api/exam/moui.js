import apiClient from "shared/api/client";

export const getMouiExamList = async (params) => {
  try {
    const response = await apiClient.get("/getMouiExamList", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMouiExamDetail = async (params) => {
  try {
    const response = await apiClient.get("/getMouiExamDetail", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const insertMouiExam = async (data) => {
  try {
    const response = await apiClient.post("/insertMouiExam", new URLSearchParams(data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMouiExam = async (data) => {
  try {
    const response = await apiClient.post("/updateMouiExam", new URLSearchParams(data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMouiExam = async (data) => {
  try {
    const response = await apiClient.post("/deleteMouiExam", new URLSearchParams(data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getExamYearList = async (params) => {
  try {
    const response = await apiClient.get("/getExamYearList", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
