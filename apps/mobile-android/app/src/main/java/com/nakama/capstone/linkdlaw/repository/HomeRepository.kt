package com.nakama.capstone.linkdlaw.repository

import com.nakama.capstone.linkdlaw.remote.api.ApiService
import com.nakama.capstone.linkdlaw.remote.dto.GetProfileResponse
import com.nakama.capstone.linkdlaw.remote.dto.UpdateProfileRequest

class HomeRepository(private val api: ApiService) {
    
    suspend fun getProfileData():GetProfileResponse{
        return api.getProfile()
    }
    
    suspend fun updateProfileData(updateProfileRequest: UpdateProfileRequest):GetProfileResponse{
        return api.updateProfile(updateProfileRequest)
    }
    
}