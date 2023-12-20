package com.nakama.capstone.linkdlaw.screen.chat

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.nakama.capstone.linkdlaw.remote.dto.GetPredictRequest
import com.nakama.capstone.linkdlaw.repository.ChatRepository
import kotlinx.coroutines.launch
import retrofit2.HttpException

class ChatViewModel(private val chatRepository: ChatRepository):ViewModel() {
    
    private val _loading = MutableLiveData<Boolean>()
    val loading: LiveData<Boolean> = _loading
    
    private val _predictResult = MutableLiveData<String?>()
    val predictResult: LiveData<String?> = _predictResult
    
    fun getPredict(query: String){
        viewModelScope.launch { 
            _loading.value = true
            try {
                val response = chatRepository.getPredict(GetPredictRequest(query))
                _predictResult.value = response.category
                _loading.value = false
            }catch (e: HttpException) {
                _predictResult.value = "Gagal predict"
                _loading.value = false
            }catch (e: Exception){
                _predictResult.value = "Gagal predict"
                _loading.value = false
            }
        }
    }
    
}