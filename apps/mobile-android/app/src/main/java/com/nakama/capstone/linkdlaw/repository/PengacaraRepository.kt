package com.nakama.capstone.linkdlaw.repository

import com.nakama.capstone.linkdlaw.remote.api.ApiService
import com.nakama.capstone.linkdlaw.remote.dto.GetLawyerDetailResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetLawyerResponse

class PengacaraRepository(private val apiService: ApiService) {
    
    suspend fun getLawyers(): GetLawyerResponse{
        return apiService.getLawyers()
    }
    
    suspend fun getLawyerDetail(id: Int): GetLawyerDetailResponse{
        return apiService.getLawyerDetail(id)
    }
    
}