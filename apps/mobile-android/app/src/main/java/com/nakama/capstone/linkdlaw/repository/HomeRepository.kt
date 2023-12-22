package com.nakama.capstone.linkdlaw.repository

import android.util.Log
import com.nakama.capstone.linkdlaw.remote.api.ApiService
import com.nakama.capstone.linkdlaw.remote.dto.GetEditProfileResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetEditProfileResponseImage
import com.nakama.capstone.linkdlaw.remote.dto.GetProfileResponse
import com.nakama.capstone.linkdlaw.remote.dto.UpdateProfileRequest
import okhttp3.MultipartBody

class HomeRepository(private val api: ApiService) {
    
    suspend fun getProfileData():GetProfileResponse{
        return api.getProfile()
    }
    
    suspend fun updateProfileData(updateProfileRequest: UpdateProfileRequest):GetProfileResponse{
        return api.updateProfile(updateProfileRequest)
    }
    
    suspend fun updateImageProfile(image: MultipartBody.Part): GetEditProfileResponse {
        Log.d("awoekoawekawoke3", "updateImageProfile: $image")
        return api.updateImageProfile(image)
    }
    
}