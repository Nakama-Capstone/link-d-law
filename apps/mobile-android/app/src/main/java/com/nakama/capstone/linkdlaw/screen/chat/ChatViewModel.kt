package com.nakama.capstone.linkdlaw.screen.chat

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.nakama.capstone.linkdlaw.remote.dto.GetAllMessageResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetPredictRequest
import com.nakama.capstone.linkdlaw.remote.dto.GetTanyakimResponse
import com.nakama.capstone.linkdlaw.remote.dto.SendMessageRequest
import com.nakama.capstone.linkdlaw.repository.ChatRepository
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive
import kotlinx.coroutines.launch
import retrofit2.HttpException

class ChatViewModel(private val chatRepository: ChatRepository) : ViewModel() {

    private val _loading = MutableLiveData<Boolean>()
    val loading: LiveData<Boolean> = _loading

    private val _predictResult = MutableLiveData<String?>()
    val predictResult: LiveData<String?> = _predictResult

    private val _tanyakimResult = MutableLiveData<GetTanyakimResponse?>()
    val tanyakimResult: LiveData<GetTanyakimResponse?> = _tanyakimResult
    
    private val _getMessage = MutableLiveData<GetAllMessageResponse?>()
    val getMessage: LiveData<GetAllMessageResponse?> = _getMessage

    fun getPredict(query: String) {
        viewModelScope.launch {
            _loading.value = true
            try {
                val response = chatRepository.getPredict(GetPredictRequest(query))
                _predictResult.value = response.category
                _loading.value = false
            } catch (e: HttpException) {
                _predictResult.value = "Gagal predict"
                _loading.value = false
            } catch (e: Exception) {
                _predictResult.value = "Gagal predict"
                _loading.value = false
            }
        }
    }

    fun getTanyakimResult(query: String) {
        viewModelScope.launch {
            _loading.value = true
            try {
                val response = chatRepository.getTanyakimResult(query)
                _tanyakimResult.value = response
                _loading.value = false
            } catch (e: HttpException) {
                _loading.value = false
                Log.d("Tanyakim", "getTanyakimResult: Gagal ${e.code()}")
            } catch (e: Exception) {
                _loading.value = false
                Log.d("Tanyakim", "getTanyakimResult: Gagal ${e.message}")
            }

        }
    }

    fun getMessageFromChatId(chatId: Int) {
        viewModelScope.launch {
            _loading.value = true
            try {
                val response = chatRepository.getMessageFromChatId(chatId)
                _getMessage.value = response
                _loading.value = false
            }
            catch (e: HttpException){
                Log.e("GetMessage", "getMessageFromChatId: Error Get Message ${e.message}", )
                _loading.value = false
            }
            catch (e: Exception){
                Log.e("GetMessage", "getMessageFromChatId: Error Get Message ${e.message}", )
                _loading.value = false
            }
        }
    }
    
    fun startPolling(chatId: Int) {
        viewModelScope.launch { 
            while (isActive){
                getMessageFromChatId(chatId)
                delay(5000)
            }
        }
    }

    fun sendMessage(chatId: Int, user2Id: Int, message: String) {
        viewModelScope.launch {
            chatRepository.sendMessage(
                chatId = chatId,
                SendMessageRequest(to = user2Id, message = message)
            )
        }
    }

}