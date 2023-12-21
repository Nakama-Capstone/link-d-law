package com.nakama.capstone.linkdlaw.screen.home

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.nakama.capstone.linkdlaw.remote.dto.TopLawyerDataItem
import com.nakama.capstone.linkdlaw.repository.PengacaraRepository
import kotlinx.coroutines.launch
import retrofit2.HttpException

class HomeScreenViewModel(private val pengacaraRepository: PengacaraRepository):ViewModel() {
    
    private val _listTopLawyer = MutableLiveData<List<TopLawyerDataItem?>?>()
    val listTopLawyer: LiveData<List<TopLawyerDataItem?>?> = _listTopLawyer
    
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
    
}