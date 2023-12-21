package com.nakama.capstone.linkdlaw.repository

import com.nakama.capstone.linkdlaw.remote.api.ApiService

class LawRepository(private val apiService: ApiService) {
    
    suspend fun getLaws() = apiService.getLaws()
    
    suspend fun getPasal(lawId: Int) = apiService.getPasal(lawId)
    
}