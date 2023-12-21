package com.nakama.capstone.linkdlaw.screen.home

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.nakama.capstone.linkdlaw.remote.dto.TopLawyerDataItem
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

class HomeScreenViewModel(private val pengacaraRepository: PengacaraRepository, private val newRepository: NewRepository):ViewModel() {
    
    private val _listTopLawyer = MutableLiveData<List<TopLawyerDataItem?>?>()
    val listTopLawyer: LiveData<List<TopLawyerDataItem?>?> = _listTopLawyer

    private val _listLawyers = MutableLiveData<GetNewsResponse?>()
    val listLawyer: LiveData<GetNewsResponse?> = _listLawyers
    
    fun getTopLawyer(){
        viewModelScope.launch { 
            
            try {
                val response = pengacaraRepository.getTopLawyer()
                _listTopLawyer.value = response.data
                
            }catch (e: HttpException){
                Log.e("GetTopLawyer", "getTopLawyer: Error ${e.message} ", )
            }catch (e: Exception){
                Log.e("GetTopLawyer", "getTopLawyer: Error ${e.message} ", )
            }
            
        }
    }

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