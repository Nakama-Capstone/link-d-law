package com.nakama.capstone.linkdlaw.screen.pengacaraprofile

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.nakama.capstone.linkdlaw.remote.dto.CreateChatResponse
import com.nakama.capstone.linkdlaw.repository.ChatRepository
import kotlinx.coroutines.launch
import retrofit2.HttpException

class PengacaraProfileViewModel(private val chatRepository: ChatRepository):ViewModel() {
    
    private val _loadingState = MutableLiveData<Boolean>()
    val loadingState: LiveData<Boolean> = _loadingState
    
    private val _createChatResponse = MutableLiveData<CreateChatResponse>()
    val createChatResponse: LiveData<CreateChatResponse> = _createChatResponse
    
    fun createChat(user2Id: Int){
        viewModelScope.launch { 
            _loadingState.value = true
            try {
                val response = chatRepository.createChat(user2Id)
                _createChatResponse.value = response
                _loadingState.value = false
            }catch (e: HttpException){
                _loadingState.value = false
                Log.e("CreateChat", "createChat: Gagal ${e.message}", )
            }catch (e: Exception){
                _loadingState.value = false
                Log.e("CreateChat", "createChat: Gagal ${e.message}", )
            }
        }
    }
    
}