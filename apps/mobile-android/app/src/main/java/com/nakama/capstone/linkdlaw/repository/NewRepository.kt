package com.nakama.capstone.linkdlaw.repository

import com.nakama.capstone.linkdlaw.remote.api.ApiService
import com.nakama.capstone.linkdlaw.remote.dto.GetLawyerDetailResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetLawyerResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetNewsResponse

class NewRepository(private val apiService: ApiService) {
    suspend fun getNews(): GetNewsResponse{
        return apiService.getNews()
    }
}