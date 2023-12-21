package com.nakama.capstone.linkdlaw.screen.pengacara

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.paging.Pager
import androidx.paging.PagingConfig
import androidx.paging.cachedIn
import com.nakama.capstone.linkdlaw.remote.dto.GetLawyerResponse
import com.nakama.capstone.linkdlaw.remote.dto.LawyerDataItem
import com.nakama.capstone.linkdlaw.repository.PengacaraRepository
import kotlinx.coroutines.launch
import retrofit2.HttpException

class PengacaraScreenViewModel(private val pengacaraRepository: PengacaraRepository):ViewModel() {
    
    private val _listLawyers = MutableLiveData<GetLawyerResponse?>()
    val listLawyer: LiveData<GetLawyerResponse?> = _listLawyers
    
    private val _singleLawyer = MutableLiveData<LawyerDataItem?>()
    val singleLawyer: LiveData<LawyerDataItem?> = _singleLawyer
    
    val lawyerDataFlow = Pager(PagingConfig(pageSize = Int.MAX_VALUE)) {
        PengacaraPagingDataSource(pengacaraRepository)
    }.flow.cachedIn(viewModelScope)
    
    fun getLawyersById(id: Int){
        viewModelScope.launch {
            try {
                val response = pengacaraRepository.getLawyerDetail(id)
                _singleLawyer.value = response.data
                Log.d("GetLawyer", "getLawyersById: ${_singleLawyer.value?.user?.firstName}")
            }catch (e: HttpException){
                Log.d("GetLawyer", "getLawyersById: Failed")
            }catch (e: Exception){
                Log.d("GetLawyer", "getLawyersById: Failed")
            }
        }
//        getLawyers()
//        
//        _singleLawyer.value = _listLawyers.value?.data?.first() { lawyerDataItem ->
//            lawyerDataItem?.id == id
//        } 
    }
    
    fun getLawyers(){
        viewModelScope.launch {
            try {
                val response = pengacaraRepository.getLawyers()
                _listLawyers.value = response
            }catch (e: HttpException){
                Log.d("GetLawyer", "getLawyers: Failed")
            }catch (e: Exception){
                Log.d("GetLawyer", "getLawyers: Failed")
            }
        }
    }
    
}