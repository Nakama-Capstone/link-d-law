package com.nakama.capstone.linkdlaw.screen.pesan

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.nakama.capstone.linkdlaw.remote.dto.GetAllChatResponse
import com.nakama.capstone.linkdlaw.repository.ChatRepository
import kotlinx.coroutines.launch
import retrofit2.HttpException

class PesanScreenViewModel(private val chatRepository: ChatRepository): ViewModel() {
    
    private val _loadingState = MutableLiveData<Boolean>()
    val loadingState: LiveData<Boolean> = _loadingState
    
    private val _getAllChatResult = MutableLiveData<GetAllChatResponse?>()
    val getAllChatResult: LiveData<GetAllChatResponse?> = _getAllChatResult
    
    fun getAllChat(){
        viewModelScope.launch {
            _loadingState.value = true
            try {
                _loadingState.value = false
                val response = chatRepository.getAllChat()
                _getAllChatResult.value = response
            }catch (e: HttpException){
                _loadingState.value = false
                Log.d("GetAllChat", "getAllChat: getAllChat failed")
            }catch (e: Exception){
                _loadingState.value = false
                Log.d("GetAllChat", "getAllChat: getAllChat failed")
            }
        }
    }
    
}