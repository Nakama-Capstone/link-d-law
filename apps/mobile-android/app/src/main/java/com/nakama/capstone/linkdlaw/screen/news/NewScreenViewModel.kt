package com.nakama.capstone.linkdlaw.screen.news

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.paging.Pager
import androidx.paging.PagingConfig
import androidx.paging.cachedIn
import com.nakama.capstone.linkdlaw.remote.dto.GetLawyerResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetNewsResponse
import com.nakama.capstone.linkdlaw.remote.dto.LawyerDataItem
import com.nakama.capstone.linkdlaw.repository.NewRepository
import com.nakama.capstone.linkdlaw.repository.PengacaraRepository
import kotlinx.coroutines.launch
import retrofit2.HttpException

class NewScreenViewModel(private val newRepository: NewRepository):ViewModel() {
    
    private val _listLawyers = MutableLiveData<GetNewsResponse?>()
    val listLawyer: LiveData<GetNewsResponse?> = _listLawyers
    
    fun getNews(){
        viewModelScope.launch {
            try {
                val response = newRepository.getNews()
                _listLawyers.value = response
            }catch (e: HttpException){
                Log.d("GetNews", "getNews: Failed")
            }catch (e: Exception){
                Log.d("GetNews", "getNews: Failed")
            }
        }
    }
    
}