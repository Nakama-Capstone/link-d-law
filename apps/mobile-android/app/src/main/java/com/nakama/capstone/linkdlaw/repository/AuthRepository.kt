package com.nakama.capstone.linkdlaw.repository

import com.nakama.capstone.linkdlaw.preferences.SessionPreferences
import com.nakama.capstone.linkdlaw.preferences.UserSession
import com.nakama.capstone.linkdlaw.remote.api.ApiService
import com.nakama.capstone.linkdlaw.remote.dto.LoginRequest
import com.nakama.capstone.linkdlaw.remote.dto.LoginResponse
import com.nakama.capstone.linkdlaw.remote.dto.RegisterRequest
import com.nakama.capstone.linkdlaw.remote.dto.RegisterResponse

class AuthRepository(
    private val apiService: ApiService,
    private val pref: SessionPreferences
) {
    suspend fun login(loginRequest: LoginRequest):LoginResponse {
        return apiService.login(loginRequest)
    } 
    
    suspend fun logout() {
        return pref.clearUserSession()
    }

    suspend fun saveUserSession(userSession: UserSession) {
        pref.saveUserSession(userSession)
    }

    suspend fun register(
        registerRequest: RegisterRequest
    ):RegisterResponse {
        return apiService.register(registerRequest)
    }

}