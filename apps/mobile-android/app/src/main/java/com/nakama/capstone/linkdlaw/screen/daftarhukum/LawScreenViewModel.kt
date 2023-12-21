package com.nakama.capstone.linkdlaw.screen.daftarhukum

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.paging.Pager
import androidx.paging.PagingConfig
import androidx.paging.PagingData
import androidx.paging.cachedIn
import com.nakama.capstone.linkdlaw.remote.dto.GetLawsDataItem
import com.nakama.capstone.linkdlaw.remote.dto.GetPasalDataItem
import com.nakama.capstone.linkdlaw.remote.dto.GetPasalResponse
import com.nakama.capstone.linkdlaw.repository.LawRepository
import com.nakama.capstone.linkdlaw.screen.detailhukum.DetailHukumPagingSource
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.launch
import retrofit2.HttpException

class LawScreenViewModel(private val lawRepository: LawRepository): ViewModel() {
    
    private val _getLawsResult = MutableLiveData<List<GetLawsDataItem?>?>()
    val getLawsResult: LiveData<List<GetLawsDataItem?>?> = _getLawsResult
    
    private val _getPasalResult = MutableLiveData<GetPasalResponse?>()
    val getPasalResult: LiveData<GetPasalResponse?> = _getPasalResult
    
//    val lawListDataFlow = 
    
    fun lawListDataFlow(id: Int): Flow<PagingData<GetPasalDataItem>> {
        return Pager(PagingConfig(pageSize = 50)){
            DetailHukumPagingSource(id, lawRepository)
        }.flow.cachedIn(viewModelScope)
    }
    
    fun getLaws(){
        
        viewModelScope.launch { 
            
            try {
                val response = lawRepository.getLaws()
                _getLawsResult.value = response.data
                Log.d("GetLaws", "getLaws: ${response.message}")
            }catch (e: HttpException){
                Log.d("GetLaws", "getLaws: ${e.message}")
            }catch (e: Exception){
                Log.d("GetLaws", "getLaws: ${e.message}")
            }
            
        }
        
    }
    
    fun getPasal(lawId: Int){
        
        viewModelScope.launch { 
            try {
                val response = lawRepository.getPasal(lawId)
                _getPasalResult.value = response
                Log.d("GetPasal", "getPasal: ${response.message}")
            }catch (e: HttpException){
                Log.d("GetPasal", "getPasal: ${e.message}")
            }catch (e: Exception){
                Log.d("GetPasal", "getPasal: ${e.message}")
            }
        }
        
    }
    
}