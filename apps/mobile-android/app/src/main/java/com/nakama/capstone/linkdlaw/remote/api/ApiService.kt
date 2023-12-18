package com.nakama.capstone.linkdlaw.remote.api

import com.nakama.capstone.linkdlaw.remote.dto.GetProfileResponse
import com.nakama.capstone.linkdlaw.remote.dto.LoginRequest
import com.nakama.capstone.linkdlaw.remote.dto.LoginResponse
import com.nakama.capstone.linkdlaw.remote.dto.LogoutResponse
import com.nakama.capstone.linkdlaw.remote.dto.RegisterRequest
import com.nakama.capstone.linkdlaw.remote.dto.RegisterResponse
import com.nakama.capstone.linkdlaw.remote.dto.UpdateProfileRequest
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.PUT

interface ApiService {
    
    @POST("/v1/auth/register")
    suspend fun register(
        @Body registerRequest: RegisterRequest
    ):RegisterResponse
    
    @POST("/v1/auth/login")
    suspend fun login(
        @Body loginRequest: LoginRequest
    ):LoginResponse
    
    @GET("/v1/auth/logout")
    suspend fun logout():LogoutResponse
    
    @GET("/v1/profile")
    suspend fun getProfile():GetProfileResponse
    
    @PUT("/v1/profile")
    suspend fun updateProfile(
        @Body updateProfileRequest: UpdateProfileRequest
    ):GetProfileResponse
    
    @GET("/v1/laws")
    suspend fun getLaws()
    
    @GET("/v1/laws/")
    suspend fun getPasal()
    
    @GET("/v1/chats")
    suspend fun getAllChat()
    
    @GET("/v1/chats/id")
    suspend fun getAllMessage()
    
    @POST("/v1/chats/")
    suspend fun sendMessage()
}