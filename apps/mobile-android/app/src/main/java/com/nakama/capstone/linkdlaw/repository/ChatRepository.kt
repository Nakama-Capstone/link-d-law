package com.nakama.capstone.linkdlaw.repository

import com.nakama.capstone.linkdlaw.remote.api.ApiService
import com.nakama.capstone.linkdlaw.remote.dto.CreateChatResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetAllChatResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetAllMessageResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetPredictRequest
import com.nakama.capstone.linkdlaw.remote.dto.GetPredictResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetTanyakimResponse
import com.nakama.capstone.linkdlaw.remote.dto.SendMessageRequest
import com.nakama.capstone.linkdlaw.remote.dto.SendMessageResponse
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.RequestBody.Companion.toRequestBody

class ChatRepository(private val apiService: ApiService) {
    
    suspend fun getPredict(
        getPredictRequest: GetPredictRequest
    ):GetPredictResponse{
        return apiService.getPredictResult(getPredictRequest)
    }
    
    suspend fun getTanyakimResult(
        query: String
    ): GetTanyakimResponse {
        return apiService.getTanyakimResult(query.toRequestBody("text/plain".toMediaTypeOrNull()))
    }
    
    suspend fun getAllChat():GetAllChatResponse{
        return apiService.getAllChat()
    }
    
    suspend fun createChat(user2Id: Int):CreateChatResponse{
        return apiService.createChat(user2Id)
    }
    
    suspend fun getMessageFromChatId(chatId: Int):GetAllMessageResponse{
        return apiService.getAllMessage(chatId)
    }
    
    suspend fun sendMessage( chatId: Int,sendMessageRequest: SendMessageRequest):SendMessageResponse{
        return apiService.sendMessage( chatId, sendMessageRequest)
    }
    
}