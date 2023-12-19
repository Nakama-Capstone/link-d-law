package com.nakama.capstone.linkdlaw.repository

import android.util.Log
import com.nakama.capstone.linkdlaw.preferences.SessionPreferences
import com.nakama.capstone.linkdlaw.preferences.UserSession
import com.nakama.capstone.linkdlaw.remote.api.ApiService
import com.nakama.capstone.linkdlaw.remote.dto.LoginRequest
import com.nakama.capstone.linkdlaw.remote.dto.LoginResponse
import com.nakama.capstone.linkdlaw.remote.dto.LogoutResponse
import com.nakama.capstone.linkdlaw.remote.dto.RegisterRequest
import com.nakama.capstone.linkdlaw.remote.dto.RegisterResponse

class AuthRepository(
    private val apiService: ApiService,
    private val pref: SessionPreferences
) {
    suspend fun login(loginRequest: LoginRequest):LoginResponse {
        Log.d("login", "clearUserSession: ${pref.getToken()}")
        return apiService.login(loginRequest)
    } 
    
    suspend fun logout():LogoutResponse {
        return apiService.logout()
    }
    
    suspend fun clearUserSession(){
        Log.d("Cek token", "clearUserSession: ${pref.getToken()}")
        pref.clearUserSession()
    }

    suspend fun saveUserSession(userSession: UserSession) {
        pref.saveUserSession(userSession)
        Log.d("Saveuser session", "clearUserSession: ${pref.getToken()}")
    }

    suspend fun register(
        registerRequest: RegisterRequest
    ):RegisterResponse {
        return apiService.register(registerRequest)
    }

}