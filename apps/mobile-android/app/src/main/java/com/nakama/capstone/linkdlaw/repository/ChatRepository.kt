package com.nakama.capstone.linkdlaw.repository

import com.nakama.capstone.linkdlaw.remote.api.ApiService
import com.nakama.capstone.linkdlaw.remote.dto.GetPredictRequest
import com.nakama.capstone.linkdlaw.remote.dto.GetPredictResponse

class ChatRepository(private val apiService: ApiService) {
    
    suspend fun getPredict(
        getPredictRequest: GetPredictRequest
    ):GetPredictResponse{
        return apiService.getPredictResult(getPredictRequest)
    }
    
}