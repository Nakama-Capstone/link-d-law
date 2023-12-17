package com.nakama.capstone.linkdlaw.remote.api

import com.nakama.capstone.linkdlaw.remote.dto.LoginRequest
import com.nakama.capstone.linkdlaw.remote.dto.LoginResponse
import com.nakama.capstone.linkdlaw.remote.dto.RegisterRequest
import com.nakama.capstone.linkdlaw.remote.dto.RegisterResponse
import retrofit2.http.Body
import retrofit2.http.POST

interface ApiService {
    
    @POST("/v1/auth/register")
    suspend fun register(
        @Body registerRequest: RegisterRequest
    ):RegisterResponse
    
    @POST("/v1/auth/login")
    suspend fun login(
        @Body loginRequest: LoginRequest
    ):LoginResponse
    
}